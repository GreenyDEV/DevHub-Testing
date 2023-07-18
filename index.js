// Packages Needed
const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Serves Site
app.use(express.static(path.join(__dirname, 'static')));

// 404 Handler
app.use(function(req, res, next) {
  res.status(404).sendFile(path.join(__dirname, 'static', '404.html'));
});

// Starts Server
const server = app.listen(port, () => {
  console.log(`DevHub is running on port ${port}`);
});

// Enables Ultraviolet (managed by Easyviolet github.com/Russell2259/Easyviolet)
import('easyviolet').then(Easyviolet => {
  new Easyviolet.default({
    uvPrefix: '/uv/',
    prefix: 'service/',
    bare: '/bare/',
    codec: 'xor',
    uv: {
      handler: 'uv.handler.js',
      client: 'uv.client.js',
      bundle: 'uv.bundle.js',
      config: 'uv.config.js',
      sw: 'uv.sw.js'
    },
    server: server
  });
}).catch(error => {
  console.error('Error while importing Easyviolet:', error);
});
