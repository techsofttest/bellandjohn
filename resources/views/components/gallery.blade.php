@props([
    'items' => [],
    'interval' => 3000,
    'title' => null,
])

<div class="gallery-section py-12 px-4">
    @if($title)
        <h2 class="text-3xl font-bold text-center mb-12">{{ $title }}</h2>
    @endif

    <div class="space-y-8">
        <!-- Left Row - Infinite Autoplay Scrolling Left -->
        <div class="gallery-row gallery-row-left">
            <div class="gallery-track gallery-track-left" data-interval="{{ $interval }}">
                @foreach(array_merge($items, $items) as $item)
                    <a href="{{ $item['image'] ?? '#' }}" 
                       class="gallery-item group cursor-pointer"
                       data-lightbox="gallery-left"
                       @if($item['title']) title="{{ $item['title'] }}" @endif>
                        <div class="relative overflow-hidden rounded-lg shadow-lg bg-white h-64 w-56 flex-shrink-0">
                            <img src="{{ $item['image'] ?? 'https://via.placeholder.com/400x300' }}" 
                                 alt="{{ $item['title'] ?? 'Gallery Item' }}"
                                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                            @if($item['title'])
                                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                                    <p class="text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                                        {{ $item['title'] }}
                                    </p>
                                </div>
                            @endif
                        </div>
                    </a>
                @endforeach
            </div>
        </div>

        <!-- Right Row - Autoscroll Right on Hover, Stop on Click -->
        <div class="gallery-row gallery-row-right">
            <div class="gallery-track gallery-track-right" data-interval="{{ $interval }}">
                @foreach(array_merge($items, $items) as $item)
                    <a href="{{ $item['image'] ?? '#' }}" 
                       class="gallery-item group cursor-pointer"
                       data-lightbox="gallery-right"
                       @if($item['title']) title="{{ $item['title'] }}" @endif>
                        <div class="relative overflow-hidden rounded-lg shadow-lg bg-white h-64 w-56 flex-shrink-0">
                            <img src="{{ $item['image'] ?? 'https://via.placeholder.com/400x300' }}" 
                                 alt="{{ $item['title'] ?? 'Gallery Item' }}"
                                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                            @if($item['title'])
                                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                                    <p class="text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                                        {{ $item['title'] }}
                                    </p>
                                </div>
                            @endif
                        </div>
                    </a>
                @endforeach
            </div>
        </div>
    </div>

    <style>
        .gallery-section {
            overflow: hidden;
        }

        .gallery-row {
            width: 100%;
            overflow: hidden;
        }

        .gallery-track {
            display: flex;
            gap: 1.5rem;
            padding: 1rem;
            will-change: transform;
        }

        .gallery-track-left {
            animation: scroll-left var(--interval) linear infinite;
        }

        .gallery-track-left.paused {
            animation-play-state: paused;
        }

        .gallery-track-right {
            /* No animation by default, starts on hover */
        }

        .gallery-track-right.scrolling {
            animation: scroll-right var(--interval) linear infinite;
        }

        .gallery-track-right.scrolling.paused {
            animation-play-state: paused;
        }

        @keyframes scroll-left {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }

        @keyframes scroll-right {
            0% {
                transform: translateX(-50%);
            }
            100% {
                transform: translateX(0);
            }
        }

        .gallery-item {
            display: inline-flex;
            flex-shrink: 0;
        }

        .gallery-item:focus {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
        }
    </style>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const gallery = document.currentScript.closest('.gallery-section');
            const leftTrack = gallery.querySelector('.gallery-track-left');
            const rightTrack = gallery.querySelector('.gallery-track-right');

            // Left track - continuous autoplay
            const leftInterval = setInterval(() => {
                const interval = parseInt(leftTrack.dataset.interval);
                leftTrack.style.setProperty('--interval', interval + 'ms');
            }, 100);

            // Right track - hover to scroll, click to stop
            let isScrollingRight = false;
            let scrollIntervalRight = null;

            rightTrack.addEventListener('mouseenter', function() {
                if (!isScrollingRight) {
                    isScrollingRight = true;
                    const interval = parseInt(this.dataset.interval);
                    this.style.setProperty('--interval', interval + 'ms');
                    this.classList.add('scrolling');
                }
            });

            rightTrack.addEventListener('mouseleave', function() {
                if (isScrollingRight && !scrollIntervalRight) {
                    isScrollingRight = false;
                    this.classList.remove('scrolling');
                }
            });

            rightTrack.addEventListener('click', function(e) {
                if (e.target.closest('.gallery-item')) {
                    e.preventDefault();
                    isScrollingRight = false;
                    this.classList.add('paused');
                    this.classList.remove('scrolling');
                }
            });

            // Lightbox functionality
            const initLightbox = function() {
                if (typeof GLightbox !== 'undefined') {
                    GLightbox({
                        selector: '[data-lightbox]',
                        touchNavigation: true,
                    });
                }
            };

            // Check if GLightbox is already loaded
            if (typeof GLightbox !== 'undefined') {
                initLightbox();
            } else {
                // Load GLightbox if not already loaded
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/glightbox@3/dist/js/glightbox.min.js';
                script.onload = initLightbox;
                document.head.appendChild(script);

                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://cdn.jsdelivr.net/npm/glightbox@3/dist/css/glightbox.min.css';
                document.head.appendChild(link);
            }
        });
    </script>
</div>
