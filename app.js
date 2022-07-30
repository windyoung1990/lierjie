const http = require('http');
const express = require('express');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();
app.use(express.static('static'));
app.use(history({
    index: '/index.html'
}));
app.use(express.static('dist'));


app.use(bodyParser.json({
    limit: '10MB'
}))
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
// 启动gzip
app.use(compression());

http.createServer(app).listen(6688);
