import React, { Component } from 'react';

class Extend extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _handleClick = () => {
        this.props.handleClick();
    }
    render() {
        const { name, age } = this.props;
        return (
            <div>
                name: { name },
                age: { age }
                <button onClick={ this._handleClick }>button</button>
            </div>
        );
    }
}

export default Extend;