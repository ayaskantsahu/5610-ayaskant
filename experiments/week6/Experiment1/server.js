var express = require('express')
var app = express()

var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World!')
})

var server = app.listen(3000, host, function () {

    console.log('Example app listening at http://%s:%s', host, port)

})