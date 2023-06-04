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
app.listen(port, () => {
  console.log(`DevHub is running on port ${port}`);
});
