workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  'https://magora-react-university.herokuapp.com',
  new workbox.strategies.StaleWhileRevalidate({
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  })
);

self.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox';
  const options = {
    body: event.data.text(),
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

workbox.precaching.precacheAndRoute(self.__precacheManifest);
