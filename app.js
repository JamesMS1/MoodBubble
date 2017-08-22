require('babel-register')({
	presets: ['react']
});

var express = require( 'express' );
var path = require('path');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var mainPage = require( path.join( __dirname, 'reactComponents', 'mainPage.js' ) );

app.set('port', process.env.PORT || 3000 );

app.get('/', function( request, responds ) {
	var html = ReactDOMServer.renderToString( React.createElement( mainPage ) );
		
		responds.send( html );
})








var server = app.listen(app.get('port'), function() {
  console.log('Listening on host=localhost port=' + app.get('port'));
});