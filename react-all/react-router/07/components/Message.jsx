import React, { Component } from 'react';
import About from '../components/About.jsx';

class Message extends Component {
	render() {
		let id = this.props.params.id;

		return (
			<div>
				message, { id }
				<About id={ this.props.params.id } />
			</div>
		);
	}
}

export default Message;