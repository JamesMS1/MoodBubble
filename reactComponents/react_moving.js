import React from 'react';

module.exports =class Moving extends React.Component
{
	constructor(props) {
		super( props );	
		
		var tempState = {};
		tempState.top = this.props["setupMoveing"]["top"];
		tempState.left = this.props["setupMoveing"]["left"];
		tempState.position = "absolute";
		
		this.deltaTop = this.props["setupMoveing"]["deltaTop"];
		this.deltaLeft = this.props["setupMoveing"]["deltaRight"];
		this.delay = this.props["setupMoveing"]["delay"];
		
		this.state = tempState;
		
		this.initialRender = true;
		
		this.moving = true;
		
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
	
	stopMoving(event) {
		
		if( this.moving )
		{
			this.moving=false;
			clearInterval( this.interval );
		}
		else{
			this.moving=true;
			this.activate();
		}
		
		event.stopPropagation();
	}
	
	render() 
	{
		
		
		return ( 
				<div className="Moving" onClick={(event) =>this.stopMoving(event)} >
				{
					React.Children.map
					(
						this.props.children, 
						(child) => React.cloneElement( child,
						{
						  style: { top:this.state.top, left:this.state.left, position: "absolute" }
						})
					)
				}
				</div>
			)
	}
	
}

