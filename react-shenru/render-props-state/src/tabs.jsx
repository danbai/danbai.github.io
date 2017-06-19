import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/index.scss';

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: 1
        };
    }
    _handleTab(index) {
        this.setState({
            visible: index
        });
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={ this._handleTab.bind(this, 1) }>tab1</li>
                    <li onClick={ this._handleTab.bind(this, 2) }>tab2</li>
                    <li onClick={ this._handleTab.bind(this, 3) }>tab3</li>
                </ul>
                <div>
                    <p className={ this.state.visible === 1 ? '' : 'hidden' }>1</p>
                    <p className={ this.state.visible === 2 ? '' : 'hidden' }>2</p>
                    <p className={ this.state.visible === 3 ? '' : 'hidden' }>3</p>
                </div>
            </div>
        );
    }
}

export default Tabs;