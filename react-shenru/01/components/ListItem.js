import React, { Component } from 'react';

class ListItem extends Component {
	static defaultProps = {
		text: '',
		checked: false
	};
	render() {
		return (
			<li>
				<input type="checkbox" checked={ this.props.checked } onChange={ this.props.onChange } />
				{ this.props.value }
			</li>
		);
	}
}

export default ListItem;