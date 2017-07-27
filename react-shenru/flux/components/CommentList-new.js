import React, { Component } from 'react';

function CommentList({ comments }) {
	return (
		<ul className="comment-box">
			{
				comments.map((entry, i) => {
					return (
						<li key={ `response-${i}` } className="comment-item">
							<p>{ entry.name }</p>
							<p>{ entry.content }</p>
						</li>
					)
				})
			}
		</ul>
	);
}

export default CommentList;