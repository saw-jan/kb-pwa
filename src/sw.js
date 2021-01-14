const CACHE_NAME = 'kb-pwa';
let OFFLINE_ASSETS = ['/#/', '/main.js', '/index.html', '/offline.html'];

// install serviceWorker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // initial caching
      return cache.addAll(OFFLINE_ASSETS);
    })
  );
});

// activate serviceWorker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          // clearing old caches
          return caches.delete(cache);
        })
      );
    })
  );
});

// feed Cached data
self.addEventListener('fetch', (event) => {
  console.log(event.request.url);
  event.respondWith(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        // feed from cache
        const response = await cache.match(event.request);
        return (
          response ||
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
