var express = require('express')
var app = express()

var bodyParser = require('body-parser');

var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile('./public/home.html');
})

var server = app.listen(3000, host, function () {

    console.log('Example app listening at http://%s:%s', host, port)

})

var applications = [
    {
        name: "App1",
        url: "http://www.google.com",
        type: "GET"
    },
    {
        name: "App2",
        url: "http://www.yahoo.com",
        type: "POST"
    }
]

app.get("/applications", function (req, res) {
    res.json(applications);
})

app.get("/addAppPage", function (req, res) {
    res.sendfile('./public/views/AddApp.html');
})

app.get("/loginPage", function (req, res) {
    res.sendfile('./public/views/login.html');
})