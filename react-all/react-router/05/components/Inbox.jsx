import React, { Component } from 'react';

class Inbox extends Component {
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                { this.props.children || 'welcome to your Inbox' }
            </div>
        );
    }
}

export default Inbox;