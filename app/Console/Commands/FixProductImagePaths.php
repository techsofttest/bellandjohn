<?php

namespace App\Console\Commands;

use App\Models\Product;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class FixProductImagePaths extends Command
{
    protected $signature   = 'products:fix-image-paths {--dry-run : Preview changes without saving}';
    protected $description = 'Scan all products and fix image paths that do not match the actual file on disk.';

    public function handle(): int
    {
        $disk      = Storage::disk('public');
        $dryRun    = $this->option('dry-run');
        $fixed     = 0;
        $notFound  = 0;
        $ok        = 0;

        $products = Product::whereNotNull('image')->get();
        $bar = $this->output->createProgressBar($products->count());
        $bar->start();

        foreach ($products as $product) {
            $bar->advance();

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

    /**
     * Find the best matching file on disk for a given DB path.
     * Normalises whitespace (collapses multiple spaces, trims spaces around commas/punctuation)
     * so minor import spacing differences are corrected automatically.
     */
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

    /**
     * Normalise a path for fuzzy comparison:
     * - lowercase
     * - collapse multiple spaces to one
     * - remove spaces immediately before/after commas
     */
    private function normalise(string $path): string
    {
        $path = mb_strtolower($path);
        $path = preg_replace('/\s+/', ' ', $path);           // collapse whitespace
        $path = preg_replace('/\s*,\s*/', ',', $path);       // strip spaces around commas
        return trim($path);
    }
}
