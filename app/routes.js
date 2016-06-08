var express = require('express');
var router = express.Router();
var User = require('./models/user');

  module.exports = function(app){
    // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
      router.route('/api/user')
        .get('/api/user', function(req, res) {
          // use mongoose to get all nerds in the database
          User.find(function(err, users){
            // if there is an error retreiving, send the error
            if (err)
              res.send(err); // nothing after res.send(err) will execute

            res.json(user); // return all nerd in JSON format
          });
        });



        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });
  };
