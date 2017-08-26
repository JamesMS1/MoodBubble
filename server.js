require('babel-register')({
	presets: ['react']
});

var express = require( 'express' );
var path = require('path');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var MainPage = require( path.join( __dirname, 'reactComponents', 'mainPage.js' ) );
var Test = require( path.join( __dirname, 'reactComponents', 'test.js' ) );

app.set('port', process.env.PORT || 3000 );


app.use( express.static( 'public' ) );
		
		
app.get('/', function( request, responds ) {
	var html = ReactDOMServer.renderToString( React.createElement( MainPage ) );
		
	responds.send( html );
})

app.get('/Test', function( request, responds ) {
	var html = ReactDOMServer.renderToString( React.createElement( Test ) );
		
	responds.send( html );
})

var server = app.listen(app.get('port'), function() {
  console.log('Listening on host=localhost port=' + app.get('port'));
});

