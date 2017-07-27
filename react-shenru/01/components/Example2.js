import React, { Component } from 'react';
import { render } from 'react-dom';

class Example2 extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				第三级组件: { this.props.aaa }
			</div>
		);
	}
}

export default Example2;