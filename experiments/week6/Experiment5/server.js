var express = require('express')
var app = express()

var bodyParser = require('body-parser');

var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname);

app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.sendfile('./public/exp5.html');
})

var server = app.listen(3000, host, function () {

    console.log('Example app listening at http://%s:%s', host, port)

})

app.post("/welcome", function (req, res) {
    var obj = req.body;
    console.log(obj);
    res.render('hello', { user : obj.user});
});
