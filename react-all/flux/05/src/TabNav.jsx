import React from 'react';

class TabNav extends Component {
    _getTabs() {
        const { panels, classPrefix, activeIndex } = this.props;

        return React.children.map(panels, (child) => {
            if (!child) {
                return;
            }

            const order = parseInt(child.props.order, 10);

            let events = {};
            if (!child.props.disabled) {
                event = {
                    onClick: this.props.onTabClick.bind(this, order)
                };
            }

            const ref = {};
            if (activeIndex === order) {
                ref.ref = 'activeTab';
            }

            return (
                <li
                    role="tab"
                    aria-disabled={ child.props.disabled ? 'true' : 'false' }
                    aria-selected={ activeIndex === order ? 'true' : 'false' }
                    { ...events }
                    key={ order }
                    { ...ref }
                >
                    { child.props.tab }
                </li>
            );
        })
    }
    render() {
        const { classPrefix } = this.props;

        return (
            <div role="tablist">
                <ul>{ this._getTabs() }</ul>
            </div>
        );
    }
}

export default TabNav;