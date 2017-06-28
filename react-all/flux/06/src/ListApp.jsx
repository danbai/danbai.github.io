import React, { Component } from 'react';
import List from './List.jsx';

class ListApp extends Component {
    constructor(props) {
        super(props);
    }
    _handleItemChange = (item) => {
        console.log(item);
    }
    render() {
        return (
            <List 
                list={[
                    {text: 1},
                    {text: 2}
                ]}
                handleItemChange={ this._handleItemChange } />
        );
    }
}

export default ListApp;