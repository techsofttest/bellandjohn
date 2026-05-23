<?php

namespace App\Console\Commands;

use App\Models\Product;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FixProductImagePaths extends Command
{
    protected $signature   = 'products:fix-image-paths {--dry-run : Preview changes without saving} {--normalize : Rename files to normalized filenames and update database paths}';
    protected $description = 'Scan all products and fix image paths that do not match the actual file on disk.';

    public function handle(): int
    {
        $disk      = Storage::disk('public');
        $dryRun    = $this->option('dry-run');
        $normalize = $this->option('normalize');
        $fixed     = 0;
        $notFound  = 0;
        $ok        = 0;

        $products = Product::whereNotNull('image')->get();
        $bar = $this->output->createProgressBar($products->count());
        $bar->start();

        foreach ($products as $product) {
            $bar->advance();

            if ($normalize) {
                $result = $this->normalizeProductImages($product, $disk, $dryRun);

                if ($result['fixed']) {
                    $fixed++;
                } elseif ($result['notFound']) {
                    $notFound++;
                } else {
                    $ok++;
                }

                continue;
            }

            // Already correct
            if ($disk->exists($product->image)) {
                $ok++;
                continue;
            }

            // Try to find the real file in the same directory
            $dir      = dirname($product->image);
            $allFiles = $disk->files($dir);
            $bestMatch = $this->findBestMatch($product->image, $allFiles);

            if ($bestMatch) {
                $this->newLine();
                $this->line("  <fg=yellow>FIXED</> ID {$product->id}");
                $this->line("    was:  {$product->image}");
                $this->line("    now:  {$bestMatch}");

                if (!$dryRun) {
                    // Also fix additional_images
                    $additionalFixed = [];
                    foreach ((array) ($product->additional_images ?? []) as $img) {
                        if ($disk->exists($img)) {
                            $additionalFixed[] = $img;
                        } else {
                            $imgDir   = dirname($img);
                            $imgFiles = $disk->files($imgDir);
                            $matched  = $this->findBestMatch($img, $imgFiles);
                            $additionalFixed[] = $matched ?? $img;
                        }
                    }

                    $product->image             = $bestMatch;
                    $product->additional_images = $additionalFixed ?: $product->additional_images;
                    $product->saveQuietly();
                }
                $fixed++;
            } else {
                $this->newLine();
                $this->line("  <fg=red>MISSING</> ID {$product->id}: {$product->image}");
                $notFound++;
            }
        }

        $bar->finish();
        $this->newLine(2);
        $this->table(
            ['Status', 'Count'],
            [
                ['✅ Already correct', $ok],
                ['🔧 Fixed',          $fixed],
                ['❌ File not found', $notFound],
            ]
        );

        if ($dryRun) {
            $this->warn('Dry-run mode — no changes were saved.');
        }

        return self::SUCCESS;
    }

    private function normalizeProductImages(Product $product, $disk, bool $dryRun): array
    {
        $changed   = false;
        $notFound  = false;
        $originalImage = $product->image;
        $newImage = $this->normalizeProductImagePath($originalImage, $disk, $dryRun, $product->id, 'image', $notFound);

        $originalAdditional = (array) ($product->additional_images ?? []);
        $newAdditional = [];

        foreach ($originalAdditional as $img) {
            $newAdditional[] = $this->normalizeProductImagePath($img, $disk, $dryRun, $product->id, 'additional_images', $notFound);
        }

        if ($newImage !== $originalImage || $newAdditional !== $originalAdditional) {
            if (!$dryRun) {
                $product->image = $newImage;
                $product->additional_images = $newAdditional;
                $product->saveQuietly();
            }

            $changed = true;
        }

        return ['fixed' => $changed ? 1 : 0, 'notFound' => $notFound ? 1 : 0];
    }

    private function normalizeProductImagePath(?string $dbPath, $disk, bool $dryRun, int $productId, string $field, bool &$notFound): ?string
    {
        if (!$dbPath) {
            return null;
        }

        $sourcePath = $dbPath;

        if (!$disk->exists($sourcePath)) {
            $dir       = dirname($sourcePath);
            $files     = $disk->files($dir);
            $matched   = $this->findBestMatch($sourcePath, $files);

            if (!$matched) {
                $this->newLine();
                $this->line("  <fg=red>MISSING</> ID {$productId} {$field}: {$dbPath}");
                $notFound = true;

                return $dbPath;
            }

            $sourcePath = $matched;
        }

        $normalizedPath = $this->normalizePath($sourcePath);

        if ($normalizedPath === $sourcePath) {
            return $sourcePath;
        }

        if ($disk->exists($normalizedPath)) {
            $normalizedPath = $this->getUniquePath($normalizedPath, $disk);
        }

        $this->newLine();
        $this->line("  <fg=yellow>NORMALIZED</> ID {$productId} {$field}");
        $this->line("    was:  {$sourcePath}");
        $this->line("    now:  {$normalizedPath}");

        if (!$dryRun) {
            $disk->move($sourcePath, $normalizedPath);
        }

        return $normalizedPath;
    }

    private function getUniquePath(string $path, $disk): string
    {
        $directory = dirname($path);
        $name = pathinfo($path, PATHINFO_FILENAME);
        $extension = pathinfo($path, PATHINFO_EXTENSION);
        $counter = 1;

        do {
            $candidate = $name . '-' . $counter;
            if ($extension) {
                $candidate .= '.' . $extension;
            }

            $uniquePath = $directory === '.' ? $candidate : $directory . '/' . $candidate;
            $counter++;
        } while ($disk->exists($uniquePath));

        return $uniquePath;
    }

    private function findBestMatch(string $dbPath, array $diskFiles): ?string
    {
        $normalised = $this->normalise($dbPath);

        foreach ($diskFiles as $diskFile) {
            if ($this->normalise($diskFile) === $normalised) {
                return $diskFile;
            }
        }

        return null;
    }

    private function normalizePath(string $path): string
    {
        $directory = dirname($path);
        $filename = basename($path);
        $extension = pathinfo($filename, PATHINFO_EXTENSION);
        $name = pathinfo($filename, PATHINFO_FILENAME);

        $normalizedName = Str::slug($name, '-');
        if ($normalizedName === '') {
            $normalizedName = 'file';
        }

        if ($extension !== '') {
            $normalizedName .= '.' . Str::lower($extension);
        }

        return $directory === '.' ? $normalizedName : $directory . '/' . $normalizedName;
    }

    private function normalise(string $path): string
    {
        $path = mb_strtolower($path);
        $path = preg_replace('/\s+/', ' ', $path);
        $path = preg_replace('/\s*,\s*/', ',', $path);
        return trim($path);
    }
}
