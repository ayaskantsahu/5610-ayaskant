var shiftDao = require('./dao/ShiftDao.js');
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
				args = {
						headers:{"W-Token":"542414bf26330c3bb337c4c2f069714be071d249"} // request headers 
				};
				client.get("https://api.wheniwork.com/2/users", args, 
						function(data, response){
						// parsed response body as js object 
						console.log(data);
						
						res.json(data);
				});
		});
		
		app.post('/saveShiftAssignment', function(req, res){
			var shiftAssign = req.body.shiftAssign;
			for(shift in shiftAssign)
			{
				var shiftModel =  new models.ShiftAssignment(shiftAssign[shift]);
				console.log(shift);
				shiftDao.saveShift(shiftModel, function(result){
					res.send(result);	
				});
			}
			
		});
		
		app.get('/searchStaff/:searchTerm', function(req,res){
				var searchTerm = req.params.searchTerm;
				args = {
						headers:{"W-Token":"xxxxxxxxxxxxxxxxxxxxxxxxxx"} // request headers 
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
		
		app.get('/getShifts/:date', function(req,res){
			var date = req.params.date;
			var startDate = new Date(date);
			console.log(date + " - " +startDate.getMonth());
			var endDate = new Date();
			endDate.setDate(startDate.getDate() + 1);
			var startStr = startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate();
			var endStr = endDate.getFullYear() + "-" + (endDate.getMonth() + 1) + "-" + endDate.getDate();
			args = {
						headers:{"W-Token":"542414bf26330c3bb337c4c2f069714be071d249"}, // request headers
						parameters : {location_id : 75480, start : startStr, end : endStr}
			};
			console.log(args);
			client.get("https://api.wheniwork.com/2/shifts/?location_id="+"75480&start="+startStr+"&end=" +endStr+ date, args, function(data, response){
					// parsed response body as js object 
					console.log("hi-"+data);
					
					var shifts = data.shifts;
					var respData = {};
					var shiftUserMap = {};
					var temp;
					for(var i=0; i < shifts.length; i++)
					{
						var user = getUser(data.users, shifts[i].user_id);
						if (shiftUserMap[shifts[i].start_time]) {
							temp = shiftUserMap[shifts[i].start_time];
							temp.push(user);
							shiftUserMap[shifts[i].start_time] = temp;
						}
						else {
							shiftUserMap[shifts[i].start_time] = [user];
						}
					}
					var assignments = models.ShiftAssignment.find({date : date}, function(err, data){
						respData.assigned = data;
						respData.staff = shiftUserMap;
						res.json(respData);	
					});
					
			});	
		});
		
		function getUser(users, userId){
			for(var i=0; i < users.length; i++)
			{
				if (users[i].id == userId) {
					return users[i];
				}
			}
		}
	
		
	
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