import React, { Component } from 'react';
import { render } from 'react-dom';
import { applyMiddleware ,createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer5.js';
import { addAction, delAction, txtAction, dispatchAction } from '../actions/action.js'

const logger = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            txt: 'a'
        };
    }
    add = () => {
        store.dispatch(addAction(this.state.count + 1));
    }
    del = () => {
        store.dispatch(delAction(this.state.count - 1));
    }
    add2 = () => {
        store.dispatch(dispatchAction(this.state.count + 2));
    }
    changeTxt = () => {
        let txt = 'a';
        if (this.state.txt === 'a') {
            txt = 'b';
        } else {
            txt = 'a'
        }
        store.dispatch(txtAction(txt));
    }
    componentDidMount() {
        store.subscribe(() => {
            let storeState = store.getState();

            this.setState({
                count: storeState.count,
                txt: storeState.txt
            });
        });
    }
    render() {
        return (
            <div>
                <p>count: { this.state.count }</p>
                <p><button onClick={ this.add }>add</button></p>
                <p><button onClick={ this.add2 }>add2</button></p>
                <p><button onClick={ this.del }>del</button></p>
                <p>txt: { this.state.txt }</p>
                <p><button onClick={ this.changeTxt }>改变txt</button></p>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));