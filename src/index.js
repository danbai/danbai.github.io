import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Button } from 'antd';
import './styles/index.scss';
import 'antd/dist/antd.css'

const Home = () => {
    return (
        <h1>
            Home
            <Button type="dashed">Dashed</Button>
        </h1>
    )
}

const About = () => {
    return (
        <h1>About</h1>
    )
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to="/about">about</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById('root'));