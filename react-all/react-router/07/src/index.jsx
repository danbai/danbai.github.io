import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import Nav1 from '../components/Nav1.jsx';
import Nav2 from '../components/Nav2.jsx';
import Nav3 from '../components/Nav3.jsx';
import Message from '../components/Message.jsx';
import Home from '../components/Home2.jsx';

var fun = (nextState, replaceState) => {
    console.log('enter');
    console.log(nextState);
    console.log(replaceState);
}

var gun = (nextState, replaceState) => {
    console.log('leave');
    console.log(nextState);
    console.log(replaceState);
}

var routes = (
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Home } />
            <Route path="nav1" component={ Nav1 } onEnter={ fun } onLeave={ gun } />
            <Route path="nav2" component={ Nav2 }>
                <Route path="/message/:id" component={ Message } />
                <Redirect from="message/:id" to="/message/:id" />
            </Route>
            <Route path="nav3" component={ Nav3 } />
        </Route>
    </Router>
);

render(routes, document.getElementById('root'));