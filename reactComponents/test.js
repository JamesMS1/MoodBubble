var React = require('react');
//import React, { Component } from 'react'; // : ( not working with this babel look back into


module.exports = class Test extends React.Component
{
	constructor(props) {
		super( props );	
	}
	
	stopPockingMe(e) {
		//e.stopPropagation();
		alert("Owch!");	
	}
	
	render() {
		return ( 
				<div className="testDivClass" >
					<p>Is this thing on</p> 
					<button onClick={ () => this.stopPockingMe() }>poke</button>
				</div>
				
			)
	}
	
	
	
}