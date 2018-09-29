import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        console.log('aaa');
        return (
            <div>App</div>
        )
    }
}

render(<App />, document.getElementById('root'));