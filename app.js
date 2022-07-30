const http = require('http');
const express = require('express');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();
// app.use(express.static('dist'));
// app.get('/', function (req, res) {
//     res.render(path.join(__dirname +  '/index.html'))
//   })
// app.get('/', (req, res) => {
//     res.render(path.join(__dirname +  '/index.html'))
// });
app.use(history({
    index: '/lierjie/index.html'
}));
app.use(express.static('dist'));
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.render(path.join(__dirname +  '/dist/index.html'))
});

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
