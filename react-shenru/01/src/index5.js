import React, { Component } from 'react';
import { render } from 'react-dom';
import Example from '../components/Example.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			a: 1,
			b: 100
		};
	}
	add = () => {
		this.setState({
			a: this.state.a + 1
		});
	}
	addB = () => {
		this.setState({
			b: this.state.b + 1
		})
	}
	render() {
		return (
			<div>
				<div>
					{ this.state.a }
					<Example a = { this.state.a } add={ this.add } />
					<span onClick={ this.addB }>b:{ this.state.b }</span>
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));