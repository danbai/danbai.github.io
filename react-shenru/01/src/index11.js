import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from '../reducers/reducer6.js';
import { addAction, delAction } from '../actions/action2.js';
import Example from '../components/Example5.js';

const store = createStore(reducer);

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

function mapDispatchToprops(dispatch) {
    return {
        add: () => dispatch(addAction()),
        del: () => dispatch(delAction())
    };
}

const App = connect(mapStateToProps, mapDispatchToprops)(Example);

const root = ({ store }) => (
    <Provider store={ store }>
        <Router>
            <Route path="/" component={ App }>
        </Router>
    </Provider>
);

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

