import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Nav1 extends Component {
    _clickBrowserHistory = () => {
        browserHistory.push('/nav2');
    }
    render() {
        return (
            <div>
                Nav1
                <button onClick={ this._clickBrowserHistory }>button</button>
            </div>
        );
    }
}

export default Nav1;