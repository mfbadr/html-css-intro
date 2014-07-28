'use strict';
var express = require('express');
var app = express();
var morgan = require('morgan');

app.set('views', __dirname + '/views'); //__dirname = full path of current dir
// set the 'views' directory
app.set('view engine', 'ejs');
//set the extension for views

app.use(morgan('dev')); //request logging
app.use(express.static(__dirname + '/static'));


//.get take 2 args, a part (/ in this case for home page), and a function
// our anon cb takes 2 - request and response
app.get('/', function(req, res){
  res.render('index'); //look in views folder, see the ejs, convert it to html,
                       //send to browser
});

app.get('/ninjas', function(req, res){
  res.render('ninjas');
});
app.get('/pirates', function(req, res){
  res.render('pirates');
});
app.get('/cats', function(req, res){
  res.render('cats');
});
app.get('/dogs', function(req, res){
  res.render('dogs');
});

app.listen(3000, function(){
  console.log('Express.js is listening...');
}); //listen on port 3000
