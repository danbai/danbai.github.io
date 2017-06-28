import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        // let, const
        let a = 1;
        if (true) {
            let a = 2;
            console.log(a);
        }
        console.log(a);

        // 箭头函数
        let add = (a, b) => {
            return a + b;
        }
        console.log(add(1, 2));
        let numbers = [1, 2, 3];
        let doubleNumbers = numbers.map(item => item * 2);
        console.log(doubleNumbers);

        // this指向,嵌套函数this指向global,箭头函数this指向对象
        let kitty = {
            age: 1,
            grow: function() {
                setTimeout(() => {
                    this.age++;
                    console.log(this.age);
                }, 100);
            }
        };
        kitty.grow();

        // 函数默认参数 
        function desc(age = 5, name = 'danbai') {
            return 'i am ' + name + ' ,age is ' + age;
        }
        console.log(desc());

        // Rest参数:当一个函数的最后一个参数有'...'这样的前缀,它就会变成一个数组
        function test(...args) {
            return args;
        }
        console.log(test(1, 2, 3));
    
        function test(s, ...args) {
            return s + ' ' + Math.max.apply(Math, args);
        }
        console.log(test('max is', 1, 2));

        // 展开操作符,'...',允许一个表达式在某处展开
        // 用于函数调用
        function test(x, y, z) {
            return x + y + z;
        }
        console.log(test(...[1, 2, 3]));
        // 用于数组字面量
        var arr1 = [1, 2, 3];
        var arr2 = [4, 5, 5];
        var arr3 = [...arr1, ...arr2];
        console.log(arr3);
        // 对象的展开操作符
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
        let name = 'aaa';
        console.log(`This is ${name}`);
        let s = `this is a
                this is b
                this is c`;
        console.log(s);

        // 解构赋值,解构语法可以快速从数组或者对象中提取变量,可以用一个表达式读取整个解构
        let foo = ['a', 'b', 'c'];
        let [aa, bb, cc] = foo;
        console.log(aa);
        console.log(bb);
        console.log(cc);

        let person = {
            aaa: 1,
            bbb: 2
        };
        let {aaa, bbb} = person;
        console.log(aaa);
        console.log(bbb);

        return (
            <div>app</div>
        );
    }
}

render(<App />, document.getElementById('root'));