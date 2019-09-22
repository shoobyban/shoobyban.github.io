const openCache = caches.open('wizguild-recipebook');

const version = 1.0

const cachedFiles = [
    '/rb/',
    '/rb/js/navigation-bar.js',
    '/rb/js/items-controllers.js',
    '/rb/js/item-controller.js',
    '/rb/js/webcomponents-loader.js',
    '/rb/js/webcomponents-hi-sd-ce.js',
    '/rb/js/push-navigator.js',
    '/rb/js/routing.js',
    '/rb/lib/tabbar.html',
    '/rb/lib/view-controller.html',
    '/rb/lib/navigation-bar.html',
    '/rb/lib/zone-navigator.html',
    '/rb/lib/item.html',
    '/rb/lib/recipe.html',
    '/rb/js/main.js',
    '/rb/recipes.json'
]

self.addEventListener('install', event => {
    event.waitUntil(
        openCache.then(cache => cache.addAll(cachedFiles))
    );
});

self.addEventListener('fetch', event => {
    console.log("cache fetch")
    console.log(event.request)
    event.respondWith(
        caches.match(event.request).then( response => {
            if (event.request.url.startsWith('/rb/recipes.json')) {
                return fetch(event.request).catch( error => response)
            } else {
                return response || fetch(event.request);
            }   
        })
    );
});
