import React, { Component } from 'react';

class Message extends Component {
    render() {
        const id = this.props.params.id;

        return (
            <div>message, { id }</div>
        );
    }
}

export default Message;