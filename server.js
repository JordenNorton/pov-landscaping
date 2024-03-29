const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// Serve your static site
app.use(serveStatic(path.join(__dirname, 'dist')));

// Catch all routes and redirect to the index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Server started on port ' + port);
