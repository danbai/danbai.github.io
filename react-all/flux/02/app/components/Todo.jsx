import React, { Component } from 'react';
import List from './List';
import CreateButton from './CreateButton';
import TodoStore from '../stores/TodoStore';
import TodoAction from '../actions/TodoAction';
import uuid from 'uuid';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getAll()
        };
    }
    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange);
    }
    _onchange = () => {
        this.setState({
            todos: TodoStore.getAll()
        });
    }
    _createTodo = () => {
        TodoAction.create({id: uuid.v4(), content: '3rd stuff'});
    }
    _deleteTodo = (id) => {
        TodoAction.delete(id);
    }
    render() {
        return (
            <div>
                <List items={ this.state.todos } onDelete={ this._deleteTodo } />
                <CreateButton onClick={ this._createTodo } />
            </div>
        );
    }
}

export default Todo;