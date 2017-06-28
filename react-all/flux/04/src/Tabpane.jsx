import React, { Component } from 'react';

class Tabpane extends Component {
    render() {
        const { classPrefix, className, isActive, children } = this.props;

        return (
            <div role="tabpanel" aria-hidden={ !isActive }>
                { children }
            </div>
        );
    }
}

export default TabPane;