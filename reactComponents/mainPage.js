var React = require('react');
//var path = require('path');
var Test = require('./test.js'); //path.join( __dirname, 'test.js' ) );
//import React, { Component } from 'react'; // : ( not working with this babel look back into


module.exports = class MainPage extends React.Component
{
	constructor(props) {
		super( props );	
		
		this.state = {
			objectListTests: 
			[
				{top:100, left:50, deltaTop:11, deltaRight:80, delay:100},
				{top:20, left:10, deltaTop:10, deltaRight:16, delay:200},
				{top:15, left:0, deltaTop:-5, deltaRight:30, delay:400},
				{top:30, left:50, deltaTop:30, deltaRight:6, delay:150},
			]
		}
	}
	
	insertTest(objectTemp) {
		this.uniqueID = this.uniqueID || 0;
		this.uniqueID++;
		return (
				<Test key={this.uniqueID} id={this.uniqueID} lala={objectTemp}/>
			)
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
						{ this.state.objectListTests.map( (objectTemp) => this.insertTest(objectTemp) ) }
						</div>
						<script src='/js/bundle.js' />
					</body>
				</html>
			)
	}
	
	
	
}