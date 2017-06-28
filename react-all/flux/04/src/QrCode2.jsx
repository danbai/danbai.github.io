import React, { Component } from 'react';

class QrCode2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    _showQr = () => {
        this.setState({
            active: !this.state.active
        })
    }
    componentDidMount() {
        document.body.addEventListener('click', (e) => {
            let target = e.target;

            if (target && (target.matches('img') || target.matches('button'))) {
                return;
            }

            this.setState({
                active: false
            });
        });
    }
    render() {
        return (
            <div>
                <button onClick={ this._showQr }>button</button>
                <img src="../images/100.png" className={ this.state.active ? '' : 'hidden' } />
            </div>
        );
    }
}

export default QrCode2;