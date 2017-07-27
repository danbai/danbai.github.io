import React, { Component } from 'react';
import { IndexLink } from 'react-router';

class About extends Component {
	render() {
		console.log(this.props.id);
		return (
			<div>
				About, { this.props.id }
			</div>
		);
	}
}

export default About;