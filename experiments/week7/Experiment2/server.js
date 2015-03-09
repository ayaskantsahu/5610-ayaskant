var express = require('express')
var app = express()
var mongoose = require('mongoose');
var userName = process.env.OPENSHIFT_MONGODB_DB_USERNAME || '';
var password = process.env.OPENSHIFT_MONGODB_DB_PASSWORD || '';
var mongoDBHost = process.env.OPENSHIFT_MONGODB_DB_HOST || 'localhost';
var mongoDBPort = process.env.OPENSHIFT_MONGODB_DB_PORT || '27017';
var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var uri = 'mongodb://' + userName + ':' + password + '@' + mongoDBHost + ':' + mongoDBPort + '/cs5610';
if (userName == '') {
    uri = 'mongodb://' + mongoDBHost + ':' + mongoDBPort + '/cs5610';
}
console.log(uri);
mongoose.connect(uri);

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(__dirname + '/public'));


var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String
});

var User = mongoose.model("User", UserSchema);

User.find(function (err, data) {
    if (data.length) {
        console.log("fail");
    }
    else {
        var user = new User({
            firstName: "ayaskant",
            lastName: "sahu",
            email: "tito_bbsr@gmail.com",
            username: "tito_bbsr"
        });
        console.log(user);
        user.save(function (err, data) {
            console.log("success");
        });
    }
});

app.get('/courses', function (req, res) {
    User.find(function (err, data) {
        console.log("Data =" + data);
        res.json(data);
    });
});

app.get('/', function (req, res) {
    res.sendfile('./public/exp2.html');
});

app.post('/saveuser', function (req, res) {
    var user = new User(req.body);
    user.save(function (err, data) {
        User.find(function (err, data) {
            res.json(data);
        });
    });
});

var server = app.listen(port, host, function () {

    console.log('Example app listening at http://%s:%s', host, port)

})