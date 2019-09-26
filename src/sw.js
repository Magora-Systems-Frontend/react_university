workbox.core.skipWaiting();
workbox.core.clientsClaim();

let arrayRoutes = ['categories', 'comments', 'courses/Popular'];

for (var i = 0; i < arrayRoutes.length; i++) {
  workbox.routing.registerRoute(
    `https://magora-react-university-api.herokuapp.com/${arrayRoutes[i]}`,
    new workbox.strategies.CacheFirst({
      cacheName: arrayRoutes[i],
    })
  );
}

workbox.precaching.precacheAndRoute(self.__precacheManifest);
