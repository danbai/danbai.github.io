import React, { Component } from 'react';
import Goods from './goods.jsx';

class Demo extends Component {
    x = 33;
    constructor(props) {
        super(props);

        this.state = {
            goods: [
                {
                    id: 1,
                    name: 'aaa'
                }, {
                    id: 2,
                    name: 'bbb'
                }, {
                    id: 3,
                    name: 'ccc'
                }, {
                    id: 4,
                    name: 'ddd'
                }
            ],
            selectedGoods: [2, 3]
        };
    }
    render() {
        let { goods, selectedGoods } = this.state;
        return (
            <div><Goods goods={ goods } selectedGoods={ selectedGoods } /></div>
        );
    }
}

var aaaa = new Demo();
var bbbb = new Demo();
console.log(aaaa);
console.log(bbbb);
console.log(aaaa.x);
console.log(bbbb.x);

export default Demo;