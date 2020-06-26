import React from 'react';
import CoinComponent from '../CoinComponent/CoinComponent';

class FlipperContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            faceToDisplay : true,
            count: 0,
            headCount : 0,
            tailCount : 0
        }
    }

    handleClick = () => {
        this.setState(currentState => {return {count: currentState.count + 1}});
        this.setState(currentState => {return {faceToDisplay : !currentState.faceToDisplay}});
        if (this.state.faceToDisplay) {
            this.setState(currentState => {return {headCount: currentState.headCount + 1}});
        } else {
            this.setState(currentState => {return {tailCount: currentState.tailCount + 1}});
        }
    }

    render(){
        return (
            <div className="FlipperContainer">
              <h1>Let's flip a coin</h1>
              <CoinComponent coinValue={this.state.faceToDisplay}/>
              <button onClick={this.handleClick}>Flip me !</button>
              <p>Out of {this.state.count} flips, there have been {this.state.headCount} heads and {this.state.tailCount} tails.</p>
            </div>
        );
    }
}

export default FlipperContainer;