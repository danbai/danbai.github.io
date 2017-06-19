import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                react router 2
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));