const cFiles = 'cFiles';
const staticAssets = [
	'/index.html',
	'/chorus.html',
	'/bal.html',
	'/bin/bk.png',
	'/bin/left.png',
	'/bin/right.png',
	'/css/reset.css',
	'/css/single.css',
	'/css/theme.css',
	'/data/bhajans.json',
	'/font/Roboto-Regular.ttf',
	'/js/functions.js',
	'/js/jquery.js',
	'/js/main.js',
	'/js/swiped-events.js'
];
//install SW
self.addEventListener('install', (e) => {
	console.log('installed');
	e.waitUntil(
		caches
			.open(cFiles)
			.then((cache) => {
				console.log('Caching files');
				cache.addAll(staticAssets);
			})
			.then(() => self.skipWaiting())
	);
});
//activate SW
self.addEventListener('activate', (e) => {
	console.log('activated');
	//remove unwanted caches
	e.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cache) => {
					if (cache != cFiles) {
						console.log('Clearing old cache');
						return caches.delete(cache);
					}
				})
			);
		})
	);
});
//fetch from caches
self.addEventListener('fetch', (e) => {
	console.log('fetching from caches' + e.request.url);
	e.respondWith(
		caches.match(e.request).then(function(r) {
			//console.log('Fetching resourcs');
			return (
				r ||
				fetch(e.request).then(function(response) {
					return caches.open(cFiles).then(function(cache) {
						console.log('Caching updates');
						cache.put(e.request, response.clone());
						return response;
					});
				})
			);
		})
	);
});
/*
self.addEventListener('fetch', (e) => {
	console.log('fetching from caches' + e.request.url);
	e.respondWith(
		caches.match(e.request).then(function(r) {
			//console.log('Fetching resourcs');
			return (
				r ||
				fetch(e.request).then(function(response) {
					return caches.open(cFiles).then(function(cache) {
						console.log('Caching updates');
						cache.put(e.request, response.clone());
						return response;
					});
				})
			);
		})
	);
});
//caching sites
/*
self.addEventListener('fetch', (e) => {
	console.log('Fetching');
	e.respondWith(
		fetch(e.request)
			.then((res) => {
				//cloning response
				const resClone = res.clone();
				//open cache
				caches.open(cFiles).then((cache) => {
					//add response to cache
					cache.put(e.request, resClone);
				});
				return res;
			})
			.catch((err) => caches.match(e.request).then((res) => res))
	);
});
*/
