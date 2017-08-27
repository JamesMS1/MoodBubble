require('babel-register')({
	presets: ['es2015','react']
});

var express = require( 'express' );
//var fetch = require('node-fetch'); //useful but not right now npm install --save node-fetch
var path = require('path');
var fs = require('fs');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var MainPage = require( path.join( __dirname, 'reactComponents', 'mainPage.js' ) );
var Test = require( path.join( __dirname, 'reactComponents', 'test.js' ) );
//var Bubble = require( path.join( __dirname, 'reactComponents', 'bubble.js' ) );

app.set('port', process.env.PORT || 3000 );


app.use( express.static( 'public' ) );
		
		
app.get('/', function( request, responds ) {
	//var html = ReactDOMServer.renderToString( React.createElement( MainPage ) );
		
	//responds.send( html );
	
	var html = ReactDOMServer.renderToString( React.createElement( MainPage ) );	
	
	responds.send( html );
})

var objectListTests = require('./resources/data/bubbles.json');

app.get('/data', function( request, responds ) {		
  responds.json(objectListTests);
})

var server = app.listen(app.get('port'), function() {
  console.log('Listening on host=localhost port=' + app.get('port'));
});

