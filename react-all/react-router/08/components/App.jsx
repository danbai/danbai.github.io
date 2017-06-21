import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <h1>header</h1>
                <div>
                    <ul>
                        <li><Link to="/nav1">Nav1</Link></li>
                        <li><Link to="/nav2">Nav2</Link></li>
                        <li><Link to="/nav2/message/222">Nav2 message</Link></li>
                        <li><Link to="/nav3">Nav3</Link></li>
                    </ul>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default App;