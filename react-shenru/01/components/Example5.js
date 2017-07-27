import React, { Component } from 'react';

class Example extends Component {
    render() {
        const { count, add, del } = this.props;

        return (
            <div>
                <p>count: { count }</p>
                <p><button onClick={ add }>add</button></p>
                <p><button onClick={ del }>del</button></p>
            </div>
        );
    }
}

export default Example;