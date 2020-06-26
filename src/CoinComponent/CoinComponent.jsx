import React from 'react';
import './CoinComponent.css';

function CoinComponent (props) {
    let img;

    if (props.coinValue) {
        img = <img className='coinImg' src='head2.jpg' alt='coin head or coin tail'/>
    } else {
        img = <img className='coinImg' src='tail2.jpg' alt='coin head or coin tail'/>
    }

    return (
      <div className="CoinComponent">
          {img}
      </div>
    );
  }

export default CoinComponent;
