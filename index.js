// Import Packages
import http from 'node:http';
import express from 'express';
import * as url from 'url';
import * as path from 'node:path';

//Import proxy packages
import createBareServer from '@tomphttp/bare-server-node';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';

// Variables
const app = express();
const server = http.createServer();
const bare = createBareServer('/bare/');
const port = process.argv[2] || 80;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// display webpage
app.use(express.static(path.join(__dirname, '/static'), { extensions: ['html'] }));
// include ultraviolet scripts (autoupdate)
app.use('/uv/', express.static(uvPath));
// 404 handler
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, './static/', '404.html')));

server.on('request', (req, res) => {
    if (bare.shouldRoute(req)) {
        bare.routeRequest(req, res);
    } else {
        app(req, res);
    }
});

server.on('upgrade', (req, res) => {
    if (bare.shouldRoute(req)) {
        bare.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});

server.listen(port, '0.0.0.0', () => {
    console.log("DevHub is listening on port "+server.address().port);
});