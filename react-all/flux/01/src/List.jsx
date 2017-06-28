import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {
                    this.props.list.map((item, key) => {
                        return (
                            <div key={ key }>
                                <button onClick={ this.props._delTodo.bind(this, key) }>删除</button>
                                <span>{ item }</span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default List;