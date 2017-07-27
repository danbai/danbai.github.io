import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import About2 from '../components/About2.jsx';
import About3 from '../components/About3.jsx';

class Home extends Component {
	static defaultProps = {
		autoPlay: false,
		maxLoops: 10
	}
	constructor(props) {
		super(props);
		this.state = {
			a: 1
		};
		this.add = this.add.bind(this);
	}
	add() {
		this.setState({
			a: this.state.a + 1
		});
	}
	componentWillMount() {
		this.setState({
			a: this.state.a + 1	// 先执行willMount，a + 1，再执行render,componentDidMount
		});
		console.log('will' + this.state.a);
	}
	componentDidMount() {
		console.log('did' + this.state.a);
	}
	render() {
		console.log('render' + this.state.a);
		return (
			<div>
				<div><button onClick={ this.add }>home</button></div>
				<div>{ this.state.a }</div>
				<div>{ this.props.maxLoops }</div>
				<About3 id={ this.state.a } />
			</div>
		);
	}
}

export default Home;