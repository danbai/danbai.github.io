import React, { Component } from 'react';
import { IndexLink } from 'react-router';

class About3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			b: 1
		};
	}
	componentWillReceiveProps(nextProps) {
		console.log('willreceive');
		console.log(nextProps);
		this.setState({
			b: 10
		});
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('should update');
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
				About:, { this.props.id }
				About: { this.state.b }
			</div>
		);
	}
}

export default About3;