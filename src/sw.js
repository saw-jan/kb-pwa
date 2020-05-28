const CACHE_NAME = 'kb-pwa';
let OFFLINE_ASSETS = [
    '/',
    '/single',
    '/main.js',
    '/index.html',
];

// install serviceWorker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Cache opened');
            // initial caching
            return cache.addAll(OFFLINE_ASSETS);
        })
    );
});

// activate serviceWorker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.key().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    // clearing old caches
                    return caches.delete(cache);
                })
            )
        })
    )
});

// feed Cached data
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
        // feed from cache
      return cache.match(event.request).then(response => {
        // feed from network
        return response || fetch(event.request).then(response => {
            // cache new data
          cache.put(event.request, response.clone());
          return response;
        });
      });
    }).catch(function() {
      // If both fail, show a generic fallback:
      return caches.match('/offline.html');
    })
  );
});
