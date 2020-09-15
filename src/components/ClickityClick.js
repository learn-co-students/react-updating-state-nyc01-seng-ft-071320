// Code ClickityClick Component Here

import React from 'react';

class ClickityClick extends React.Component{

    constructor(){
        super();
    
         this.state = { hasBeenClicked: false };
         console.log('in constrcutor')
         console.log(this.state)
    }

    handleClick = () => {
        console.log('in handleClick')
        this.setState( {hasBeenClicked: true} )
    }

    render(){
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not' } been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
} // end of class 

export default ClickityClick;