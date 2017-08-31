import React from 'react';
//var path = require('path');
import Moving from './react_moving.js';
import Test from './test.js'; //path.join( __dirname, 'test.js' ) );
//import React, { Component } from 'react'; // : ( not working with this babel look back into
import  Draggable from 'react-draggable';
import fetch from 'isomorphic-fetch'

module.exports = class MainPage extends React.Component
{
	constructor(props) {
		super( props );	
		
		this.state = {
			
			objectListTests:[]
			
		};
		
		this.uniqueID=1;
		
	}
	
	componentWillMount()
	{
		this.getInialData();
		this.interval = setInterval(() => {
			this.getInialData();
		}, 5000);
	}
	
	getInialData()
	{
		var url = "http://localhost:3000/data";
		fetch( url )
			.then( results => results.json() )
			.then( array => array.forEach( dataPoint => this.addBubble( dataPoint ) ) )
			.catch( error => console.error(error)  )
	}
	
	addBubble(dataObject)
	{
		var objectListTests = [...this.state.objectListTests];
		if( !objectListTests.filter( aObject => { return aObject.id === dataObject.id } ).length )
		{
			objectListTests.push( dataObject );
			this.setState( {objectListTests} );
		}
	}
	
	createBubble()
	{
		this.uniqueID++;
		var dataObject = {
			"id":this.state.objectListTests.length+1, 
			"top":Math.floor((Math.random() * document.documentElement.clientHeight) + 0),
			"left":Math.floor((Math.random() * document.documentElement.clientWidth) + 0),
			"deltaTop":Math.floor((Math.random() * 5) + -5),
			"deltaRight":Math.floor((Math.random() * 5) + -5),
			"delay":Math.floor((Math.random() * 100) + 50)
		};
		
		var url = "http://localhost:3000/addBubble";
		fetch(
			url,
			{
				method: 'post',
				body: JSON.stringify(dataObject),
				headers: new Headers({'Content-Type': 'application/json'})
			}
		)
		.then(function(res){ return res.json(); });
		//.then(function(data){ console.log( JSON.stringify( data ) ) });
		
		//console.log( dataObject );
		this.addBubble( dataObject )
	}
	
	insertTestTest(objectTemp) {
		return (
				<Moving key={objectTemp.id}  setupMoveing={ objectTemp }>
					<div className="bubbles" >
						<img src={"image/bubble.jpg"} alt="Mountain View" style={{width:78, height:80}} />
					</div>
				</Moving>	
			)
	}
	
	render() {
		return (
				<div className="topDivClass" id="topDiv">
					<button className="movingButton" onClick={() => this.createBubble()} >Add Bubble!</button>
					{ this.state.objectListTests.map( (objectTemp) =>this.insertTestTest( objectTemp ) ) }
				</div>
			)
	}	
	
	
}