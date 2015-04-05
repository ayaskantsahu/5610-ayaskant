var appDao = require('./dao/ApplicationDao.js');
var models = require('./models/Models.js');
var helper = require('./helper.js');
var Client = require('node-rest-client').Client;
var client = new Client();
module.exports = function(app, passport) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	

	// frontend routes =========================================================
	// route to handle all angular requests

	app.get('/', function(req, res) {
		console.log("/");
		if (req.user) {
			res.sendfile('./public/index.html');
		}
		else {
			res.sendfile('./public/views/login.html');
		}
	});
	
		app.get('/getStaff', function(req,res){
				args ={
						headers:{"W-Token":"......................"} // request headers 
				};
				client.get("https://api.wheniwork.com/2/users", args, 
						function(data, response){
						// parsed response body as js object 
						console.log(data);
						
						res.json(data);
				});
		});
		
		app.get('/searchStaff/:searchTerm', function(req,res){
				var searchTerm = req.params.searchTerm;
				args ={
						headers:{"W-Token":"........................."} // request headers 
				};
				client.get("https://api.wheniwork.com/2/users", args, 
						function(data, response){
						// parsed response body as js object 
						console.log(data);
						var result = [];
						for(var i = 0; i < data.users.length; i++)
						{
								if (data.users[i].first_name.toLowerCase().lastIndexOf(searchTerm.toLowerCase(), 0) === 0 || data.users[i].last_name.toLowerCase().lastIndexOf(searchTerm.toLowerCase(), 0) === 0) {
										result.push(data.users[i]);
								}
						}
						res.json(result);
				});
		});
	
	
	
	/* Handle Login POST */
	app.post('/login', passport.authenticate('login', {
		successRedirect: '/index',
		failureRedirect: '/relogin',
		failureFlash : true 
	}));
	
	app.get('/relogin', function(req, res){
		res.sendfile('./public/views/relogin.html');
	});
       
	/* GET Registration Page */
	app.get('/signup', function(req, res){
		res.sendfile('./public/views/register.html');
	});
       
	/* Handle Registration POST */
	app.post('/signup', passport.authenticate('signup', {
		successRedirect: '/login',
		failureRedirect: '/signup',
		failureFlash : true 
	}));
	
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
	
	// frontend routes =========================================================
	// route to handle all angular requests
	
	/* GET login page. */
	app.get('/login', function(req, res) {
		// Display the Login page with any flash message, if any
		res.sendfile('./public/views/login.html');
	});
	
	app.get('/index', function(req, res) {
		console.log("index");
		if (req.user) {
			res.sendfile('./public/index.html');
		}
		else {
			res.sendfile('./public/views/login.html');
		}
		
	});
	

	
	app.get('*', function(req, res) {
		console.log("*");
		if (req.user) {
			res.sendfile('./public/index.html');
		}
		else {
			res.sendfile('./public/views/login.html');
		}
	});
	
	
       
	

};