import React from 'react';
import  Draggable from 'react-draggable';
//import React, { Component } from 'react'; // : ( not working with this babel look back into

module.exports =class Test extends React.Component
{
	constructor(props) {
		super( props );	
		
		var tempState = {};
		tempState.top = this.props["lala"]["top"];
		tempState.left = this.props["lala"]["left"];
		tempState.position = "absolute";
		
		
		this.deltaTop = this.props["lala"]["deltaTop"];
		this.deltaLeft = this.props["lala"]["deltaRight"];
		this.delay = this.props["lala"]["delay"];
		
		this.state = tempState;
		
		this.initialRender = true;
	}
	
	stopPockingMe(event) {
		console.log("pock");
		event.stopPropagation();
		clearInterval( this.interval );
	}
	
	componentWillMount() {
		this.activate()
	}
	
	activate() { 
		this.interval = setInterval(() => {
			var topDelt = {};
			topDelt["top"] = this.state.top+this.deltaTop;
			var leftDelt = {};
			leftDelt["left"]=this.state.left+this.deltaLeft;
			
			if( topDelt["top"] >= document.documentElement.clientHeight-85 )
			{
				topDelt["top"]= document.documentElement.clientHeight-85;
				this.deltaTop = -1*Math.abs(this.deltaTop);
			}
			
			if( leftDelt["left"] >= document.documentElement.clientWidth-100)
			{
				leftDelt["left"]= document.documentElement.clientWidth-100;
				this.deltaLeft = -1*Math.abs(this.deltaLeft);
			}

			if( topDelt["top"] <= 0 )
			{
				topDelt["top"]= 0;
				this.deltaTop = Math.abs(this.deltaTop);
			}

			if( leftDelt["left"] <= 0 )
			{
				leftDelt["left"]= 0;
				this.deltaLeft = Math.abs(this.deltaLeft);
			}
			
			//console.log(document.body.clientHeight);
			//console.log(document.documentElement.clientHeight);
			this.setState( topDelt );
			this.setState( leftDelt );
		}, this.delay);
	}
	
	render() 
	{
		return ( 
				<Draggable>
					<div className="testDivClass" style={this.state} >
						<p>Is this thing on</p> 
						<button onClick={ (event) => this.stopPockingMe(event) } >poke</button>
					</div>
				</Draggable>
			)
	}
	
}

