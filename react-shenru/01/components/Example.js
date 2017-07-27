import React, { Component } from 'react';
import { render } from 'react-dom';
import Example2 from '../components/Example2.js';

class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			a: 10,
			b: 1000
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			a: nextProps.a
		});
	}
	add = () => {
		this.setState({
			a: this.state.a + 1
		});
	}
	addChild = () => {
		this.setState({
			b: this.state.b + 1
		});
	}
	render() {
		return (
			<div>
				<p>父组件: { this.props.a }</p>
				<p>子组件: { this.state.a }</p>
				<button onClick={ this.add }>调用子组件自己的add方法</button>
				<button onClick={ this.props.add }>调用父组件add方法</button>
				<p onClick={ this.addChild }>子组件b: { this.state.b }</p>
				<Example2 aaa={ this.props.a } />
			</div>
		);
	}
}

export default Example;