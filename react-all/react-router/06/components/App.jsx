import React, { Component } from 'react';
import { Link } from 'react-router';
import '../css/index.scss';

class App extends Component {
    render() {
        return (
            <div id="route">
                <div className="header">header</div>
                <div className="main clearfix">
                    <ul className="left">
                        <li><Link to="/nav1">Nav1</Link></li>
                        <li><Link to="/nav2">Nav2</Link></li>
                        <li><Link to="/nav3">Nav3</Link></li>
                    </ul>
                    <div className="right">
                        { this.props.children }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;