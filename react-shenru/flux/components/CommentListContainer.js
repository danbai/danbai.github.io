import React, { Component } from 'react';
import CommentList from '../components/CommentList-new.js';
import Promised from '../components/Promised.js';

class CommentListContainer extends Component {
	render() {
		return <CommentList data={ data } />
	}
}

export default Promised('comments', CommentListContainer);