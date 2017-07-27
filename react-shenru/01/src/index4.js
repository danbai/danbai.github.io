import React, { Component } from 'react';
import { render } from 'react-dom';
import reducer from '../reducers/reducer.js';
import { createStore } from 'redux';

const store = createStore(reducer);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}
	add = () => {
		store.dispatch({
			type: 'ADD',
			data: 'add'
		});
	}
	del = () => {
		store.dispatch({
			type: 'DEL',
			data: 'del'
		})
	}
	render() {
		store.subscribe(() => {
			this.setState({
				count: store.getState()
			});
		});
		return (
			<div>
				<span>{ this.state.count }</span>
				<button onClick={ this.add }>add</button>
				<button onClick={ this.del }>del</button>
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));