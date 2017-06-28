import React, { Component } from 'react';
import { render } from 'react-dom';
import ListApp from './ListApp.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ListApp />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));