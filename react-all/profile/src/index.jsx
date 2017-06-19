import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Profile from './profile.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const props = {
            name: 'danbai',
            age: 22
        };
        return (
            <div>
                <Profile { ...props } />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));