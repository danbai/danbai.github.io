import React, { Component } from 'react';
import { IndexLink } from 'react-router';

class Nav1 extends Component {
	render() {
		return (
			<div>
				Nav1
				<IndexLink to="/">home</IndexLink>
			</div>
		);
	}
}

export default Nav1;