import Easyviolet from 'easyviolet';
import express from 'express';
import path from 'node:path';
import url from 'node:url';

const app = express();
const easyviolet = new Easyviolet();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(easyviolet.express(app));

app.use(express.static(path.join(__dirname, './static/'), { extensions: ['html'] }));

app.use(function(req, res, next) {
  res.status(404).sendFile(path.join(__dirname, 'static', '404.html'));
});

const server = app.listen(80, () => {
  console.log("DevHub is listening to port "+server.address().port);
});