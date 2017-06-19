import React, { Component } from 'react';

class Hobby extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <li>{ this.props.hobby }</li>
        );
    }
}

export default Hobby;