import React, { Component, cloneElement } from 'react';
import '../css/index.scss';
import TabNav from './TabNav';
import TabContent from './TabContent';

class Tabs extends Component {
    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => {}
    };
    constructor(props) {
        super(props);

        const currProps = this.props;

        let activeIndex;
        if ('activeIndex' in currProps) {
            activeIndex = currProps.activeIndex;
        } else if ('defaultActiveIndex' in currPos) {
            activeIndex = currPos.defaultActiveIndex;
        }

        this.state = {
            activeIndex,
            prevIndex: activeIndex
        };
    }
    componentWillReceiveProps(nexProps) {
        if ('activeIndex' in nextProps) {
            this.setState({
                activeIndex: nextProps.activeIndex
            });
        }
    }
    _handleTabClick = (activeIndex) {
        const prevIndex = this.state.activeIndex;

        if (this.state.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props) {
            this.setState({
                activeIndex,
                prevIndex
            });

            this.props.onChange({activeIndex, prevIndex});
        }
    }
    _renderTabNav = () => {
        const { classPrefix, children } = this.props;

        return (
            <TabNav
                key="tabBar"
                classPrefix={ classPrefix }
                onTabClick={ this._handleTabClick }
                panels={ children }
                activeIndex={ this.state.activeIndex } />
        );
    }
    _renderTabContent = () => {
        const { classPrefix, children } = this.props;

        return (
            <TabContent
                key="tabcontent"
                classPrefix={ classPrefix }
                activeIndex={ activeIndex }
                panels={ children } />
        );
    }
    render() {
        const { className } = this.props;

        return (
            <div className='ui-tabs' }>
                { this._renderTabNav() }
                { this._renderTabContent() }
            </div>
        );
    }
}

export default Tabs;