import React, { Component } from 'react';
import { IndexLink } from 'react-router';

class About2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bb: 10
		}
		this.add = this.add.bind(this);
	}
	add() {
		this.setState({
			bb: this.state.bb + 1
		});
	}
	componentWillReceiveProps(nextProps) {
		console.log('willreceive');
		console.log(nextProps);
		if (nextProps.id === 4) {
			this.setState({
				bb: 1000
			})
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('should update');
		if (nextState.bb === 16) {
			return false;
		}
		return true;
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('will update');
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('did update');
	}
	render() {
		console.log('about2' + this.props.id);
		return (
			<div>
				About2, { this.props.id }
				<h1>{ this.state.bb }</h1>
				<button onClick={ this.add }>btn</button>
			</div>
		);
	}
}

export default About2;