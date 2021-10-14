//create AppShell
//const _cacheName = 'poke@v1-cache-10a';
self.addEventListener('install', () => {
    console.log('install');

    caches.open('poke-cache-10a').
        then(e => {
            e.add('index.html');
            e.add('css/styles.css');
            e.add('css/poke.css');
        });
});
self.addEventListener('activate', () => {
    console.log('Se ha activado el serviceworker')
});

//Cache only
self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request));//Obtiene los recursos que estan en cache 
});
//Network only
self.addEventListener('fetch', event => {
    event.respondWith(fetch(event.request));//Obtiene los recursos solo de la red sin consultar el cache 
});