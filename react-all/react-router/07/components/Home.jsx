import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import About from '../components/About.jsx';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			html: '<script>alert("111")</script>',
			txt: '<div>First &middot; Second &lt;a<script>ha<br/>ha</script>a<br/><span>bb</span>&gt;</div>'
		};
		this.push = this.push.bind(this);
	}
	routerWillLeave(nextLocation) {
		if (!this.state.isSaved) {
			return 'not saved'
		}
	}
	push() {
		browserHistory.push('/Nav2');
	}
	fun() {
		console.log(1);
		// location.href = 'https://www.baidu.com/';
		window.open('https://www.baidu.com/');
	}
	render() {
		return (
			<div>
				欢迎来到主页
				<Link to="/Nav1">Nav1</Link>
				<About id={ <div>'a'<a href="">链接</a></div> } />
				<button onClick={ this.push }>push</button>
				{
					[1, 2, 3, 4].map((item, index) => {
						return (
							<p key={ index }>{ item }</p>
						)
					})
				}
				<div>
					<label htmlFor="male">male</label>
					<input type="checkbox" id="male" />
				</div>
				<div onClick={ this.fun }>{ this.state.html }</div>
				<div dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
				<div>{ this.state.txt }</div>
				<div dangerouslySetInnerHTML={{ __html: this.state.txt }}></div>
			</div>
		);
	}
}

export default Home;