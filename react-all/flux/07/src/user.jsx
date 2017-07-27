import React, { Component } from 'react';

class User extends Component {
	render() {
		return (
			<div>user: { this.props.params.userId }</div>
		);
	}
}

export default User;