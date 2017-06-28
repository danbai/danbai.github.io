import React, { Component } from 'react';
import Tabs from './Tabs.jsx';
import TabPane from './Tabpane.jsx';

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: '0'
        };
    }
    _handleChange = (e) => {
        this.setState({
            activeIndex: e.target.value
        });
    }
    render() {
        let { activeIndex } = this.state;
        return (
            <div>
                <select value={ activeIndex } onChange={ this._handleChange }>
                    <option value="0">tab 1</option>
                    <option value="1">tab 2</option>
                    <option value="2">tab 3</option>
                </select>
                <Tabs defaultActiveIndex={ activeIndex }>
                    <TabPane order="0" tab={ 'Tab 1' }>第一个tab里的内容</TabPane>
                    <TabPane order="1" tab={ 'Tab 2' }>第二个tab里的内容</TabPane>
                    <TabPane order="2" tab={ 'Tab 3' }>第三个tab里的内容</TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Tab;