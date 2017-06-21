import React, { Component } from 'react';
import { Link } from 'react-router';
import '../css/index.scss';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="header">header</h1>
                <div className="main clearfix">
                    <ul className="left">
                        <li><Link to="/nav1">nav1</Link></li>
                        <li><Link to="/nav2">nav2</Link></li>
                        <li><Link to="/nav2/message/0622">nav2 message</Link></li>
                        <li><Link to="/nav3">nav3</Link></li>
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