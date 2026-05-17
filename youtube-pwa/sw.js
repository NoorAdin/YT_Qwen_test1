// Service Worker for YouTube PWA
const CACHE_NAME = 'youtube-pwa-v1';

// Install event - cache essential assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json'
            ]);
        })
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    // Skip cross-origin requests to YouTube
    if (event.request.url.includes('youtube.com')) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

// Handle Picture-in-Picture messages
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'PIP_REQUEST') {
        // Forward PIP requests to clients
        event.ports[0].postMessage({ type: 'PIP_RESPONSE' });
    }
});
