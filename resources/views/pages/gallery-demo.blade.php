@extends('layouts.app')

@section('content')
<div class="container mx-auto">
    <x-gallery 
        title="Our Gallery"
        :items="[
            ['image' => 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', 'title' => 'Mountain View'],
            ['image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', 'title' => 'Portrait'],
            ['image' => 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop', 'title' => 'Landscape'],
            ['image' => 'https://images.unsplash.com/photo-1507371341519-ef6e0b6d7d1b?w=400&h=300&fit=crop', 'title' => 'Sunset'],
            ['image' => 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', 'title' => 'Nature'],
            ['image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', 'title' => 'Ocean'],
        ]"
        :interval="3000"
    />
</div>
@endsection
