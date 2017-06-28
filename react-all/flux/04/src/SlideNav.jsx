import React, { Component } from 'react';

class SlideNav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { activeIndex, _handleChange } = this.props;

        return (
            <select value={ activeIndex } onChange={ _handleChange }>
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
            </select>
        );
    }
}

export default SlideNav;