import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, browserHistory } from 'react-router';
import App from '../components/App.jsx';
import Inbox from '../components/Inbox.jsx';
import About from '../components/About.jsx';
import Message from '../components/Message.jsx';
import Dashboard from '../components/Dashboard.jsx';

render(
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Dashboard } />
            <Route path="about" component={ About } />
            <Route path="inbox" component={ Inbox }>
                <Route path="/message/:id" component={ Message } />
                <Redirect from="message/:id" to="/message/:id" />
            </Route>
        </Route>
    </Router>
, document.getElementById('root'));
