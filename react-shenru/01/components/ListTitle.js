import React, { Component, PropTypes } from 'react';
import emitter from './events';

class ListTitle extends Component {
	static contextTypes = {
		txt: React.PropTypes.string
	};
	componentDidMount() {
		this.onEmitterChange = emitter.addListener('EmitChange', (msg, data) => {
			console.log(data);
		})
	}
	render() {
		return (
			<h2 onClick={ this.props.onTitleChange }>
				<span>span: { this.context.txt }</span>
				{ this.props.title }
				<p onClick={ this.onEmitterChange }>aaa</p>
			</h2>
		);
	}
}

export default ListTitle;