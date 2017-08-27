import React from 'react';
//var path = require('path');
import Test from './test.js'; //path.join( __dirname, 'test.js' ) );
//import React, { Component } from 'react'; // : ( not working with this babel look back into

import fetch from 'isomorphic-fetch'

module.exports = class MainPage extends React.Component
{
	constructor(props) {
		super( props );	
		
		this.state = {
			objectListTests: 
			[
			]
		}
	}
	
	componentWillMount()
	{
		
		var url = "http://localhost:3000/data";
		fetch( url )
			.then( results => results.json() )
			.then( array => array.forEach( dataPoint => this.addBubble( dataPoint ) ) )
			.catch( error => console.error(error)  )
			
	}
	
	addBubble(dataObject)
	{
		console.log( dataObject );
		var objectListTests = [...this.state.objectListTests];
		//console.log( dataObject['petName']+" "+dataObject.petName );
		
		//if( !objectListTests.filter( aObject => { return aObject.petName === dataObject.petName } ).length )
		//	
		objectListTests.push( dataObject );
		
		this.setState( {objectListTests} );
	}
	
	
	insertTest(objectTemp) {
		console.log( "bob" );
		this.uniqueID = this.uniqueID || 0;
		this.uniqueID++;
		return (
				<Test key={this.uniqueID} id={this.uniqueID} lala={objectTemp }/>
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
						<script src='/js/build.js' />
					</body>
				</html>
			)
	}
	
	
	
}