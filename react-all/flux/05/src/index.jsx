import React, { Component } from 'react';
import { render } from 'react-dom';
import Tabs from './Tabs.jsx';
import TabPane from './TabPane.jsx';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        };
    }
    _handleChange = (e) => {
        this.setState({
            activeIndex: parseInt(e.target.value, 10)
        });
    }
    render() {
        return (
            <div>
                <div className="operator">
                    <span>切换 Tab:</span>
                    <select value={ this.state.activeIndex } onChange={ this._handleChange }>
                        <option value="0">Tab1</option>
                        <option value="1">Tab2</option>
                        <option value="2">Tab3</option>
                    </select>
                </div>
                <Tabs defaultActiveIndex={ this.state.activeIndex } className="tabs-bar">
                    <TabPane order="0" tab={ 'Tab 1' }>第一个Tab里的内容</TabPane>
                    <TabPane order="1" tab={ 'Tab 2' }>第二个Tab里的内容</TabPane>
                    <TabPane order="2" tab={ 'Tab 3' }>第三个Tab里的内容</TabPane>
                </Tabs>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));