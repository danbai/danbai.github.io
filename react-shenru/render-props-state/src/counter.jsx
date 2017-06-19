import React, { Component, propTypes } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    _handleClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <div>
                <p>{ this.state.count }</p>
                <button onClick={ this._handleClick }>计数</button>
            </div>
        );
    }
}

export default Counter;