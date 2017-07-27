import React, { Component } from 'react';
import { render } from 'react-dom';
import reducer from '../reducers/reducer.js';
import { createStore } from 'redux';

const store = createStore(reducer);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			source: 'aaaa',
			ajaxSource: 'ajax'
		};
	}
	handleAdd = () => {
		store.dispatch({
			type: 'INCREMENT'
		});
	}
	handleDel = () => {
		store.dispatch({
			type: 'DECREMENT'
		});
	}
	handleGet = () => {
		store.dispatch({
			type: 'getSource'
		})
	}
	handleAjax = () => {
		fetch('../api/response.json')
		.then(response => response.json())
		.then((res) => {
			store.dispatch({
				type: 'ajax',
				data: res
			});
		}).catch((err) => {
			store.dispatch({
				type: 'ajaxError',
				data: err
			});
		})
	}
	render() {
		let _this = this;
		store.subscribe(() => {
			let o = store.getState();
			_this.setState({
				[o.type]: store.getState()[o.type]
			})
		});
		return (
			<div>
				<span>{ this.state.count }</span>
				<button onClick={ this.handleAdd }>add</button>
				<button onClick={ this.handleDel }>del</button>
				<span>{ this.state.source }</span>
				<button onClick={ this.handleGet }>获取数据</button>
				<span>{ this.state.ajaxSource.res }</span>
				<button onClick={ this.handleAjax }>获取ajax数据</button>
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));