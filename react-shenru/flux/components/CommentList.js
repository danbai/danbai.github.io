import React, { Component } from 'react';
import ajax from '../util/ajax.js';

class CommentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			commentList: []
		};
	}
	handleSubmit = () => {
		let _name = this._name,
			_content = this._content,
			_publishTime = this._publishTime,
			commentList = this.state.commentList;

		commentList.push({
			name: _name.value,
			content: _content.vlaue,
			publishTime: _publishTime.value
		});

		this.setState({
			commentList: commentList
		})
	}
	componentDidMount() {
		ajax('../api/response.json', 'GET', true, (res) => {
			this.setState({
				commentList: res.commentList
			});
		})
	}
	render() {
		let commentList = this.state.commentList;

		return (
			<div>
				<h1>评论列表</h1>
				{
					commentList.map((item, index) => {
						return (
							<div key={ index }>
								<div>name: { item.name }</div>
								<div>content: { item.content }</div>
								<div>publishTime: { item.publishTime }</div>
							</div>
						)
					})
				}
				<h1>发表评论</h1>
				<div>name: <input type="text" ref={ name => this._name = name } /></div>
				<div>content: <input type="text" ref={ content => this._content = content } /></div>
				<div>publishTime: <input type="text" ref={ publishTime => this._publishTime = publishTime } /></div>
				<button onClick={ this.handleSubmit }>提交</button>
			</div>
		);
	}
}

export default CommentList;