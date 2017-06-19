import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from '../components/Home';
import Repos from '../components/Repos';
import About from '../components/About';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={ Home } />
                <Route path="/repos" component={ Repos } />
                <Route path="/about" component={ About } />
            </Router>
        );
    }
}

render(<App />, document.getElementById('root'));