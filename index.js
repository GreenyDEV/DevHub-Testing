// Import Packages
import http from 'node:http';
import express from 'express';
import * as url from 'url';
import * as path from 'node:path';
import { createBareServer } from '@tomphttp/bare-server-node';

// Variables
const app = express();
const server = http.createServer();
const bare = createBareServer('/bare/');
const port = process.argv[2] || 80;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// display webpage
app.use(express.static(path.join(__dirname, '/static'), { extensions: ['html'] }));
// 404 handler
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, './static/', '404.html')));

// the following is bare stuff (dw i dont know what this does either)
server.on('request', (req, res) => {
    if (bare.shouldRoute(req)) {
        bare.routeRequest(req, res);
    } else {
        app(req, res);
    }
});

server.on('upgrade', (req, socket, head) => {
    if (bare.shouldRoute(req)) {
        bare.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});

// start server
server.listen(port, '0.0.0.0', () => {
    console.log("DevHub is listening on port "+server.address().port);
});
