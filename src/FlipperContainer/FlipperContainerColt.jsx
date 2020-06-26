import React from 'react';
import {choice} from '../Helpers';
import CoinComponentColt from '../CoinComponent/CoinComponentColt';

class FlipperContainerColt extends React.Component {
    static defaultProps = {
        coins: [
            {side: 'heads', url: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: 'tails', url: "https://tinyurl.com/react-coin-tails-jpg"}
        ]
    }
    
    constructor(props){
        super(props);
        this.state = {
            currentCoin : null,
            flipCount: 0,
            headCount : 0,
            tailCount : 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState( state => {
            let newState = {
                ...state,
                currentCoin: newCoin,
                flipCount: state.flipCount + 1
            }

            if(newCoin.side === 'heads'){
                newState.headCount += 1;
            } else {
                newState.tailCount += 1;
            }
            return newState;
        })
    }

    handleClick(e) {
        this.flipCoin();
    }

    render(){
        return (
            <div className="FlipperContainerColt">
              <h1>Let's flip a coin</h1>
              {this.state.currentCoin && <CoinComponentColt side={this.state.currentCoin.side} url={this.state.currentCoin.url}/>}
              <button onClick={this.handleClick}>Flip me !</button>
              <p>Out of {this.state.flipCount} flips, there have been {this.state.headCount} heads and {this.state.tailCount} tails.</p>
            </div>
        );
    }
}


export default FlipperContainerColt;