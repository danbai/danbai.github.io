import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './app.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Users from './users.jsx';
import User from './user.jsx';
import NoMatch from './no-match.jsx';

var routes = (
	<Router history={ browserHistory }>
		<Route path="/" component={ App }>
			<IndexRoute path="/" component={ Home } />
			<Route path="about" component={ About } />
			<Route path="users" component={ Users }>
				<Route path="/user/:userId" component={ User } />
			</Route>
			<Route path="*" component={ NoMatch }></Route>
		</Route>
	</Router>
);

render(routes, document.getElementById('root'));