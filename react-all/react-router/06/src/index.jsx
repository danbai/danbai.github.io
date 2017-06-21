import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../components/App.jsx';
import Nav1 from '../components/Nav1.jsx';
import Nav2 from '../components/Nav2.jsx';
import Nav3 from '../components/Nav3.jsx';

render(
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Nav1 } />
            <Route path="nav1" component={ Nav1 } />
            <Route path="nav2" component={ Nav2 } />
            <Route path="nav3" component={ Nav3 } />
        </Route>
    </Router>
,document.getElementById('root'));