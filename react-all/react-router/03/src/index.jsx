import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from '../components/Home.jsx';
import Repos from '../components/Repos.jsx';
import About from '../components/About.jsx';
import Message from '../components/Message.jsx'

/*
1.理由器Router就是React的一个组件.
Router组件有一个参数history,它的值hashHistory表示,路由的切换由URL的hash的变化决定,
即url的#部分发生变化.举例来说,用户访问http://www.example.com,实际看到的是http://www.example.com/#/
2.路由嵌套
Route组件还可以嵌套.
用户访问/repos时,会先加载Home组件,然后在它的内部再加载Repos组件.
*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#/repos">Repos</a></li>
                    <li><a href="#/about">About</a></li>
                </ul>
                <Router history={ hashHistory }>
                    <Route path="/" component={ Home }>
                        <Route path="/message" component={ Message } />
                    </Route>
                    <Route path="/repos" component={ Repos } />
                    <Route path="/about" component={ About } />
                </Router>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));