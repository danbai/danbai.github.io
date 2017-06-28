import React, { Component } from 'react';
import { render } from 'react-dom';
// import { hello, PI, person } from './hello.jsx';
import * as util from './hello.jsx';

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    shout() {
        return `My name is ${this.name}, age is ${this.age}`;
    }
    // 静态方法
    static foo() {
        return 'Here is a static method';
    }
}

class Dog extends Animal {
    constructor(name, age = 2, color = 'black') {
        super(name, age);
        this.color = color;
    }
    shout() {
        return super.shout() + `, color is ${this.color}`;
    }
}

class App extends Component {
    render() {
        const cow = new Animal('betty', 2);
        console.log(cow.shout());
        console.log(Animal.foo());

        const jackTheDog = new Dog('jack');
        console.log(jackTheDog.shout());

        util.hello();

        return (
            <div>{ cow.shout() }</div>
        );
    }
}

render(<App />, document.getElementById('root'));