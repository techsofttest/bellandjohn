<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class FileController extends Controller
{
    /**
     * Serve a storage file by path.
     * PHP decodes the URL correctly regardless of Apache's UTF-8 encoding behavior.
     * This solves 404s caused by filenames with special characters (®, ", commas, etc.)
     *
     * @param  string  $path
     * @return StreamedResponse|\Illuminate\Http\Response
     */
    public function serve(string $path)
    {
        // Laravel's request routing already URL-decodes the path segment
        $disk = Storage::disk('public');

        if (!$disk->exists($path)) {
            abort(404, 'File not found.');
        }

        $mimeType = $disk->mimeType($path) ?: 'application/octet-stream';
        $size     = $disk->size($path);

        return response()->stream(function () use ($disk, $path) {
            $stream = $disk->readStream($path);
            fpassthru($stream);
            fclose($stream);
        }, 200, [
            'Content-Type'   => $mimeType,
            'Content-Length' => $size,
            'Cache-Control'  => 'public, max-age=31536000, immutable',
        ]);
    }
}
