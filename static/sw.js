importScripts('/dyn/dynamic.config.js');
importScripts('/dyn/dynamic.worker.js');

const dynamic = new Dynamic();

self.dynamic = dynamic;

self.addEventListener('fetch',
    event => {
        event.respondWith(
            (async function() {
                if (await dynamic.route(event)) {
                    return await dynamic.fetch(event);
                }

                return await fetch(event.request);
            })()
        );
    }
);