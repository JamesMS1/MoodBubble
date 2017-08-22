var React = require('react');
//var path = require('path');
var Test = require('./test.js'); //path.join( __dirname, 'test.js' ) );
//import React, { Component } from 'react'; // : ( not working with this babel look back into


module.exports = class MainPage extends React.Component
{
	constructor(props) {
		super( props );	
	}
	
	render() {
		return (
				<html>
					<head>
						<link rel='stylesheet' href='/css/style.css' />
						<title>Basic Setup</title>
					</head>
					<body>
					
						<div className="topDivClass" id="topDiv">
							<h1>Hello World!</h1>
							<Test />
						</div>
						<script src='/js/bundle.js' />
					</body>
				</html>
			)
	}
	
	
	
}