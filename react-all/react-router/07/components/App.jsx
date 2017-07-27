import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
	componentWillReceiveprops(nextProps) {
		console.log(nextProps);
	}
	render() {
		console.log(this.props.location.query);
		return (
			<div>
				<div>
					<Link to="/nav1">nav1</Link>
					<Link to="/nav2">nav2</Link>
					<Link to="/message/2">msg2</Link>
					<Link to="/message/3">msg3</Link>
					<Link to="/nav3">nav3</Link>
				</div>
				<div>{ this.props.children }</div>
			</div>
		);
	}
}

export default App;