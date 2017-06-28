import React, { Component } from 'react';
import SlideNav from './SlideNav.jsx';
import SlideContent from './SlideContent.jsx';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: '0'
        };
    }
    _handleChange = (e) => {
        this.setState({
            activeIndex: e.target.value
        })
    }
    render() {
        let { activeIndex } = this.state;
        return (
            <div>
                <SlideNav activeIndex={ activeIndex } _handleChange={ this._handleChange } />
                <SlideContent activeIndex={ activeIndex } />
            </div>
        );
    }
}

export default Slide;