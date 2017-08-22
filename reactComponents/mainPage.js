var React = require('react');
//import React, { Component } from 'react'; // : ( not working with this babel look back into


module.exports = class MainPage extends React.Component
{
	constructor(props) {
		super( props );	
	}
	
	render() {
		return (
				<div>
					<h1>Hello World!</h1>
				</div>
			)
	}
	
	
	
}