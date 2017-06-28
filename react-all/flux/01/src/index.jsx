import React, { Component } from 'react';
import { render } from 'react-dom';
import List from './List.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['111', '222', '333']
        }
    }
    _addTodo = () => {
        let input = this.refs.inputTodo,
            val = input.value;

        if (val) {
            this.setState({
                list: this.state.list.concat(val)
            });
        }
    }
    _delTodo = (key) => {
        let list = this.state.list;
        list.splice(key, 1);

        this.setState({
            list: list
        });
    }
    render() {
        return (
            <div>
                <h1>这是今天的待办事项</h1>
                <List list={ this.state.list } _delTodo={ this._delTodo } />
                <div>
                    <input ref="inputTodo" />
                    <button onClick={ this._addTodo }>创建新的todo</button>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));