import React from 'react';
import  Draggable from 'react-draggable';
//import React, { Component } from 'react'; // : ( not working with this babel look back into

module.exports =class Test extends React.Component
{
	constructor(props) {
		super( props );	
		
		console.log( this.props.lala );
		
		var tempState = {
		};
		tempState.top = this.props["lala"]["top"];
		tempState.left = this.props["lala"]["left"];
		tempState.position = "absolute";
		
		
		this.deltaTop = this.props["lala"]["deltaTop"];
		this.deltaRight = this.props["lala"]["deltaRight"];
		this.delay = this.props["lala"]["delay"];
		
		this.state = tempState;
		
		this.initialRender = true;
		
	}
	
	stopPockingMe(e) {
		e.stopPropagation();
		clearInterval( this.interval );
	}
	
	componentDidMount() {
		this.activate();
  	}
	
	activate() { 
			this.interval = setInterval(() => {
			var topDelt = {};
			topDelt["top"] = this.state.top+this.deltaTop;
			var rightDelt = {};
			rightDelt["left"]=this.state.left+this.deltaRight;
				
			if( topDelt["top"] >= 500 || topDelt["top"] <= 0 )
			{
				this.deltaTop = -1*this.deltaTop;
			}
			
			if( rightDelt["left"] >= 500 || rightDelt["left"] <= 0 )
			{
				this.deltaRight = -1*this.deltaRight;
			}
			
			this.setState( topDelt );
			this.setState( rightDelt );
		}, this.delay);
	}
	
	render() 
	{
		
/*		if( this.initialRender ) {
			this.initialRender = false;	
			this.activate();
		}*/
		return ( 
				<Draggable>
					<div className="testDivClass" style={this.state} >
						<p>Is this thing on</p> 
						<button onClick={ () => this.stopPockingMe() }>poke</button>
					</div>
				</Draggable>
			)
	}
	
}

