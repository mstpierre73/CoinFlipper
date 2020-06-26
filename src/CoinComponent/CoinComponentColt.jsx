import React from 'react';
import './CoinComponent.css';

class CoinComponentColt extends React.Component {

    render() {
        return (
            <div className="CoinComponent">
                < img className='coinImg' src={this.props.url} alt={this.props.side}/>;
            </div>
        )
    }
}

export default CoinComponentColt;