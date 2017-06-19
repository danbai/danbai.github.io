import React, { Component } from 'react';

class DomDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
    }
    _handleClick = () => {
        this.setState({
            active: !this.state.active
        });
    }
    render() {
        return (
            <div onClick={ this._handleClick } className={ this.state.active ? 'active' : '' }>
                dom
            </div>
        );
    }
}

export default DomDemo;