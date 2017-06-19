import React, { Component } from 'react';

class Button2 extends Component {
    static defaultProps = {
        color: 'blue',
        text: 'Confirm'
    };
    constructor(props) {
        super(props);
    }
    _handleClick = () => {
        console.log(1);
    }
    render() {
        const { color, text } = this.props;
        return (
            <button className={ 'btn btn-${color}' } onClick={ this._handleClick }>
                <em>{ text }</em>
            </button>
        );
    }
}

export default Button2;