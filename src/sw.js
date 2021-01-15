const CACHE_NAME = 'kb-pwa';
let OFFLINE_ASSETS = ['/#/', '/main.js', '/index.html', '/offline.html'];

// install serviceWorker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        // initial caching
        return cache.addAll(OFFLINE_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// activate serviceWorker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache
        .keys()
        .then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              // clearing old cache
              return caches.delete(cacheName);
            })
          );
        })
        .then(() => {
          return self.clients.claim();
        });
    })
  );
});

// feed Cached data
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        // feed from cache
        return (
          cache.match(event.request) ||
          fetch(event.request).then((response_1) => {
            // cache new data
            cache.put(event.request, response_1.clone());
            return response_1;
          })
        );
      })
      .catch(function () {
        // If both fail, show a generic fallback:
        return caches.match('/offline.html');
      })
  );
});
