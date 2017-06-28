import React, { Component } from 'react';

class QrCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    _clickShowQrCode = () => {
        console.log(this.state.active);
        this.setState({
            active: !this.state.active
        });
    }
    componentDidMount() {
        document.body.addEventListener('click', (e) => {
            console.log(e.target);
            if (e.target && (e.target.matches('img') || e.target.matches('button'))) {
                return;
            }

            console.log(this.state.active);
            this.setState({
                active: false
            })
        });
    }
    componentWillUnMount() {
        document.body.removeEventListener('click');
    }
    render() {
        return (
            <div>
                <img
                    src="../images/100.png"
                    className={ this.state.active ? '' : 'hidden' } />
                <button onClick={ this._clickShowQrCode }>button</button>
            </div>
        );
    }
}

export default QrCode;