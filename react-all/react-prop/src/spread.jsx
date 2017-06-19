import React, { Component } from 'react';

class Spread extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let {name, age, gender} = this.props;

        return (
            <div>
                <p>{ name }</p>
                <p>{ age }</p>
                <p>{ gender }</p>
            </div>
        );
    }
}

export default Spread;