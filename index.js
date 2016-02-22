/********************************************************
Author:         Shawn Hillyer
Description:    CS290 Assignment "How To Guide"
Date;           2/22/2016
*********************************************************/

/*******************
* Setup middleware *
********************/

// Import express
var express = require('express');
var app = express();

// Import body-parser / setup (middleware for parsing POST content)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import and set up handlebars
var handlebars = require('express-handlebars').create({
    defaultLayout:'main',
    helpers: {
        // This helper allows us to use sections in templates
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});

// Import express-session and set the secret
var session = require('express-session');
app.use(session({secret:'IWillNeverTell'}));


// Tell express our default rendering engine and extensions
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Set port and public folder for static content
app.set('port', process.env.PORT || 3000); // defaults to 3000 if env.port not set
app.use(express.static(__dirname + '/public')); // tells express where to go for public static content like css, js, imgs, etc


/*******************
* ROUTES:          *
********************/

// Main index page
app.get('/', function(req,res){
    var context = {};
    
    res.render('index', context);
});


// If a POST request is received, parse the body header and the query or jsson and render the post.handlebars page
app.post('/', function(req, res){
    var context = {};
    res.render('index', context);
});


// Error Pages 404 (Not found) & 500 (Error)
app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

/******************
* Start Server    *
******************/

app.listen(app.get('port'), function(){
  console.log('Express started on http://52.26.146.27:' + 
              app.get('port') + 
              '; press Ctrl-C to terminate.' );
});