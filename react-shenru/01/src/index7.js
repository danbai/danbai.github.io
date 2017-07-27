import React, { Component } from 'react';
import { render } from 'react-dom';
import { applyMiddleware ,createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer4.js';

const logger = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

/* let next = store.dispatch;

store.dispatch = function dispatchAndLog(action) {
    console.log('dispatching', action);
    next(action);
    console.log('next state', store.getState());
} */

function changeNum(count) {
    return {
        type: 'ADD2',
        data: count
    }
}

function dispatchAction(count) {
    return (dispatch) => {
        dispatch({
            type: 'ADD3',
            data: count
        });
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            res: 'aaaa'
        };
    }
    add = () => {
        store.dispatch({
            type: 'ADD',
            data: this.state.count + 1
        });
    }
    add2 = () => {
        store.dispatch(changeNum(this.state.count + 2));
    }
    add3 = () => {
        store.dispatch(dispatchAction(this.state.count + 3));
    }
    del = () => {
        store.dispatch({
            type: 'DEL',
            data: this.state.count - 1
        });
    }
    componentDidMount() {
        fetch('../api/response.json')
        .then(response => response.json())
        .then(res => {
            store.dispatch({
                type: 'AJAX',
                data: res
            });
        })
    }
    render() {
        store.subscribe(() => { // subscribe即,每一次dispatch,都会触发reducer处理数据,即触发store.subscribe
            this.setState({
                count: store.getState().count,  // reducer返回新的state,即state的值被改变state = 1
                res: store.getState().res
            });
        });
        return (
            <div>
                <p>{ this.state.count }</p>
                <p>{ this.state.res }</p>
                <p><button onClick={ this.add }>add</button></p>
                <p><button onClick={ this.add2 }>add2</button></p>
                <p><button onClick={ this.add3 }>add3</button></p>
                <p><button onClick={ this.del }>del</button></p>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));