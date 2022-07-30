const http = require('http');
const express = require('express');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();
app.use(express.static('static'));
app.use(express.static('dist'));
app.get('/', function (req, res) {
    res.render(path.join(__dirname +  '/dist/index.html'))
  })
  
app.use(history());
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
