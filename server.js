require('babel-register')({
	presets: ['es2015','react']
});

var express = require( 'express' );
//var fetch = require('node-fetch'); //useful but not right now npm install --save node-fetch
var path = require('path');
var fs = require('fs');
var bodyParser = require("body-parser");
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var MainPage = require( path.join( __dirname, 'reactComponents', 'mainPage.js' ) );


app.set('port', process.env.PORT || 3000 );


app.use( express.static( 'public' ) );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
		
		
app.get('/', function( request, responds ) {
	var html = ReactDOMServer.renderToString( React.createElement( MainPage ) );	
	
	responds.send( html );
})

var objectListTests = require('./resources/data/bubbles.json');

app.get('/data', function( request, responds ) {		
  responds.json(objectListTests);
})

app.post("/addBubble", function( request, responds ) {
    objectListTests.push(request.body);
    responds.json({"recived":true});
});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on host=localhost port=' + app.get('port'));
});

