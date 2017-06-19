import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './list.jsx';
import Spread from './spread.jsx';
import Profile from './profile.jsx';
import Demo from './demo.jsx'
import Point from './classes.jsx';
import DomDemo from './dom-demo.jsx';
import '../css/style.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'aaaa'
        };
    }
    _propsCallback = () => {
        this.setState({
            name: this.state.name === 'aaaa' ? 'bbbb' : 'aaaa'
        });
    }
    render() {
        let props = {
            name: this.state.name,
            age: 22,
            gender: 'male'
        };

        return (
            <div>
                <button onClick={ this._propsCallback }>修改props,子组件会重新render</button>
                <Profile { ...props } />
                <Demo />
                <DomDemo />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));