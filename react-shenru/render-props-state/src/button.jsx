import React, { Component, propTypes} from 'react';
import ReactDOM from 'react-dom';
import '../css/index.scss';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
        this._handleBtnClick1 = this._handleBtnClick1.bind(this);
    }
    _handleBtnClick1() {
        this.setState({
            visible: !this.state.visible
        })
    }
    _handleBtnClick2() {
        this.setState({
            visible: !this.state.visible
        })
    }
    _handleBtnClick3() {
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        return (
            <div>
                <button onClick={ this._handleBtnClick1 }>button1</button>
                <button onClick={ this._handleBtnClick2.bind(this) }>button2</button>
                <button onClick={ () => { this._handleBtnClick3() } }>button3</button>
                <p className={ this.state.visible ? '' : 'hidden' }>button组件</p>
            </div>
        );
    }
};

export default Button;