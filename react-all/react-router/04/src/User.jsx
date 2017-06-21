import React, { Component } from 'react';
import { render } from 'react-dom';

class User extends Component {
    componentDidMount() {
        this.setState({
            user: {
                id: 1,
                name: 'aa'
            }
        });
    }
}

export default User;