// require express so that we can build an express app
var express = require('express');

// require path so that we can use path stuff like path.join

var path = require('path');

// instantiate the app
var app = express();
app.use(express.static(path.join(__dirname, './client')));
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());

// This goes in our server.js file so that we actually use the mongoose config file!
require('./server/config/mongoose.js');
// this line requires and runs the code from our routes.js file and passes it app so that we can attach our routing rules to our express application!
// require('./server/config/routes.js')(app);

var route_setter = require('./server/config/routes.js') ;
route_setter(app);


// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));
app.listen(8000, function() {
  console.log('selling stuff on: 8000');
});