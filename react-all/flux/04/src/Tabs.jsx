import React, { Component } from 'react';
import TabNav from './TabNav.jsx';
import TabContent from './TabContent.jsx';

class Tabs extends Component {
    constructor(props) {
        super(props);
        activeIndex,
        prevIndex: activeIndex
    }
    componentWillReceiveProps(nextProps) {
        if ('activeIndex' in nextProps) {
            this.setState({
                activeIndex: nextProps.activeIndex
            });
        }
    }
    _handleTabClick = () => {
        const prevIndex = this.state.activeIndex;

        if (this.state.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props) {
            this.setState({
                activeIndex,
                prevIndex
            });

            this.props.onChange({ activeIndex, prevIndex });
        }
    }
}