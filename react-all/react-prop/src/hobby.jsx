import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hobby extends Component {
    static propTypes = {
        hobby: PropTypes.string.isRequired
    };
    render() {
        return (
            <li>{ this.props.hobby }</li>
        );
    }
}; 

export default Hobby;