import React, { Component } from 'react';

class CommentList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			error: null,
			value: null
		};
	}
	componentDidMount() {
		this.props.promiseFetch.then(response => response.json())
		.then(value => this.setState({ loading: false, value }))
		.catch(error => this.setState({ loading: false, error }));
	}
	render() {
		if (this.state.loading) {
			return (
				<span>Loading...</span>
			);
		} else if (this.state.error !== null) {
			return (
				<span>Error: { this.state.error.message }</span>
			);
		} else {
			const list = this.state.value.commentList;

			return (
				<ul>
					{
						list.map((entry, i) => {
							return (
								<li key={`response-${i}`} className="comment-item">
									<p className="comment-item-name">{ entry.name }</p>
									<p className="comment-item-content">{ entry.content }</p>
								</li>
							)
						})
					}
				</ul>
			);
		}
	}
}

export default CommentList;