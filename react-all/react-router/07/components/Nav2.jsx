import React, { Component } from 'react';

class Nav2 extends Component {
	render() {
		return (
			<div>
				<h1>Nav2</h1>
				{ this.props.children ? this.props.children : 'welcome nav2' }
			</div>
		);
	}
}

export default Nav2;