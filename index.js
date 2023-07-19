import Easyviolet from 'easyviolet';
import express from 'express';
import url from 'url';
import path from 'path';

const app = express();
const easyviolet = new Easyviolet();
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'static'), { extensions: ['html'] }));

app.use((req, res, next) => {
    if (!easyviolet.requiresRoute(req)) res.status(404).sendFile(path.join(__dirname, 'static/404.html'));
    else next();
});

// STart Server

const server = app.listen(80, () => console.log(`DevHub listening on port ${server.address().port}`));

// Let EasyViolet attach to the server
easyviolet.httpServer(server);