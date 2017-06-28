import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';
import QrCode2 from './Qrcode2.jsx';
import InputApp from './Input.jsx';
import Extend from './Extend.jsx';
import Slide from './Slide.jsx';
import '../css/index.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 18,
            name: 'aaa'
        };
    }
    _handleClick = () => {
        this.setState({
            age: 22,
            name: 'bbb'
        });
    }
    componentDidMount() {
        
    }
    componentWillUnMount() {

    }
    render() {
        return (
            <div ref="main">
                <Slide />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));