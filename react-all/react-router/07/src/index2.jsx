import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: window.location.hash.slice(1)
		};
	}
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.slice(1)
			});
		});
	}
	render() {
		let route = this.state.route,
			Child;

		switch (route) {
			case 'nav1':
				Child = 'nav1';
				break;
			case 'nav2':
				Child = 'nav2';
				break;
			default:
				Child = '404'; 
		}

		return (
			<div>
				<h1>App</h1>
				<ul>
					<li><a href="#nav1">nav1</a></li>
					<li><a href="#nav2">nav2</a></li>
				</ul>
				{ Child }
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));