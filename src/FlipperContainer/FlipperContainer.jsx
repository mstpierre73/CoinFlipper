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
        console.log('onClick', this.state.faceToDisplay)
        this.setCounter();
    }

    setCounter = () => {
        this.setState({count: this.state.count + 1});
        this.setState({faceToDisplay : !this.state.faceToDisplay});
        if (this.state.faceToDisplay) {
            this.setState({headCount: this.state.headCount +1});
        } else {
            this.setState({tailCount: this.state.tailCount +1});
        }
        console.log('setCounter', this.state.faceToDisplay);
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