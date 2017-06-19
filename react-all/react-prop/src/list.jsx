import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: -1
        };
    }
    _changeActive = (index) => {
        this.setState({
            activeIndex: index
        });
    }
    render() {
        let list = this.props.list,
            activeIndex = this.state.activeIndex

        const lis = list.map((item, index) => {
            let cls = index === activeIndex ? 'active' : '';

            return (
                <li
                    className={ cls }
                    key={ index }
                    onClick={ this._changeActive.bind(this, index) }
                >
                    { item }
                </li>
            );
        });

        return <ul>{ lis }</ul>;
    }
}

export default List;