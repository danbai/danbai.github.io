import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div>this is a demoaaa   a</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));