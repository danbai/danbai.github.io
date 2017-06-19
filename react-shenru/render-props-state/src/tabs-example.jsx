import React, { Component, PropTypes, cloneElement } from 'react';
import styles from './css/styles.scss';
import classnames from 'classnames';
import TabNav from './TabNav';
import TabContent from './TabContent';

class TabsEx extends Component {
    static propTypes = {
        className: PropTypes.string,
        classPrefix: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes: arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        defaultActiveIndex: PropTypes.number,
        activeIndex: PropTypes.number,
        onChange: PropTypes.func
    };

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
        } else if ('defaultActiveIndex' in currProps) {
            activeIndex = currProps.defaultActiveIndex;
        }

        this.state = {
            activeIndex,
            prevIndex: activeIndex
        };
    }
    componentWillReceiveProps(nextProps) {
        if ('activeIndex' in nextProps) {
            this.setState({
                activeIndex: nextProps.activeIndex
            });
        }
    }
    _handleTabClick = (activeIndex) => {
        const prevIndex = this.state.activeIndex;
    }
    render() {
        return (
            <div className="ui-tabs"></div>
        );
    }
}

export default TabsEx;