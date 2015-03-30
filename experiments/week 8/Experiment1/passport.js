// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

var models = require('../app/models/Models.js');
// load up the user model
var User = models.User;

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('login', new LocalStrategy({
        passReqToCallback : true
    },
    function(req, username, password, done) { 
        // check in mongo if a user with username exists or not
        User.findOne({ 'username' :  username }, 
          function(err, user) {
            // In case of any error, return using the done method
            if (err)
              return done(err);
            // Username does not exist, log error & redirect back
            if (!user){
              console.log('User Not Found with username '+username);
              return done(null, false, 
                    req.flash('message', 'User Not found.'));                 
            }
            // User exists but wrong password, log the error 
            if (!user.validPassword(password)){
                console.log('Invalid Password');
                return done(null, false, req.flash('message', 'Invalid Password'));
            }
            // User and password both match, return user from 
            // done method which will be treated like success
            return done(null, user);
        });
    }));
    
    passport.use('signup', new LocalStrategy({
        passReqToCallback : true
    },
    function(req, username, password, done) {
        findOrCreateUser = function(){
          // find a user in Mongo with provided username
            User.findOne({'username':username}, function(err, user) {
            // In case of any error return
                if (err){
                  console.log('Error in SignUp: '+err);
                  return done(err);
                }
                // already exists
                if (user) {
                  console.log('User already exists');
                  return done(null, false, 
                     req.flash('message','User Already Exists'));
                } else {
                  // if there is no user with that email
                  // create the user
                  var newUser = new User();
                  // set the user's local credentials
                  newUser.username = username;
                  newUser.password = newUser.generateHash(password);
                  newUser.email = req.param('email');
                  newUser.firstName = req.param('firstName');
                  newUser.lastName = req.param('lastName');
         
                  // save the user
                  newUser.save(function(err) {
                    if (err){
                      console.log('Error in Saving user: '+err);  
                      throw err;  
                    }
                    console.log('User Registration succesful');    
                    return done(null, newUser);
                  });
                }
            });
        };
         
        // Delay the execution of findOrCreateUser and execute 
        // the method in the next tick of the event loop
        process.nextTick(findOrCreateUser);
    }));

};