workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp('https://magora-react-university-api.herokuapp.com/'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cacheApi',
    cacheExpiration: {
      maxAgeSeconds: 60 * 30, //cache the news content for 30mn
    },
  })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);