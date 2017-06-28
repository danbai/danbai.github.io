import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        // 箭头函数:一种更简单的函数声明方式,箭头函数永远是匿名的
        // 在对象方法的嵌套函数中,this会指向global,箭头函数指向对象本身
        let add = (a, b) => a + b;
        console.log(add(1, 2));

        let o = {
            age: 1,
            grow: function() {
                setTimeout(() => {
                    this.age++;
                    console.log(this.age);
                }, 100);
            }
        };
        o.grow();

        // 函数默认参数
        function desc(a, b = 2, c = 3) {
            return a + b + c;
        }
        console.log(desc(1));

        // Rest参数:当一个函数的最后一个参数有'...'这样的前缀,他就会变成一个参数的数组
        function getMax(...args) {
            return Math.max.apply(Math, args);
        }
        console.log(getMax(1, 2, 3));

        // 展开操作符
        function total(x, y, z) {
            return x + y + z;
        }
        console.log(total(...[1, 2, 3]));

        var arr1 = [1, 2, 3];
        var arr2 = [4, 5, 6];
        var arr3 = [...arr1, ...arr2];
        console.log(arr3);

        let mike = {
            a: 1,
            b: 2
        };
        let mike2 = {
            ...mike,
            c: 3
        };
        console.log(mike2);

        // 模板字符串
        let name = 'danbai',
            age = 22;
        console.log(`my name is ${name}, age is ${age}.`);
        let str = <div>
                    'my name is {name}, age is {age}.'
                </div>;

        // 解构赋值
        let foo = [1, 2, 3];
        let [aa, bb, cc] = foo;
        console.log(aa, bb, cc);

        let person = {
            aaa: 1,
            bbb: 2,
            ccc: 3
        };

        let { aaa, bbb, ccc } = person;
        console.log(aaa, bbb, ccc);

        return (
            <div>
                ES6语法
                { str }
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));