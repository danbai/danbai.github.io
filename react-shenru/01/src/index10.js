import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Action
function addAction() {
    return {
        type: 'ADD'
    }
}

function delAction() {
    return {
        type: 'DEL'
    }
}

// Reducer
function reducer(state = { count: 0 }, action) {
    const count = state.count;
    switch (action.type) {
        case 'ADD':
            return { count: count + 1 };
        case 'DEL':
            return { count: count - 1 };
        default:
            return state;
    }
}

// Store
const store = createStore(reducer);

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: () => dispatch(addAction()),
        del: () => dispatch(delAction())
    }
}

class Example extends Component {
    render() {
        const { count, add, del } = this.props;

        return (
            <div>
                <p>{ count }</p>
                <p><button onClick={ add }>add</button></p>
                <p><button onClick={ del }>del</button></p>
            </div>
        );
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Example);

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);