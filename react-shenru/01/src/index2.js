import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from '../components/Counter.js';
import reducer from '../reducers/index.js';

const store = createStore(reducer); // 接受reducer参数,返回新生成的Store对象

const render = () => ReactDOM.render(
	<Counter
		value={ store.getState() }	// state对象包含所有数据,如果想得到某个时点的数据,就要对Store生成快照,
		// 这种时点的数据集合,就叫做State,当前时刻的State,可以通过store.getState()拿到.
		onIncrement={ () => store.dispatch({ type: 'INCREMENT' }) }
		// state的变化,会导致view的变化,但是用户接触不到State,只能接触到view,所以state的变化必须是view导致的
		// Action就是View发出的通知,表示State应该要发生变化了
		// Action是一个对象,其中的type属性是必须的,表示Action的名称,其他属性可以自由设置.
		// Action dispatch到reducer处理,reducer根据type处理数据,return出数据,有原始的state数据,也可以自由return出数据,如action.data
		// store.dispatch是View发出Action的唯一方法
		// Store收到Action以后,必须给出一个新的State,这样view才会发生变化,这种state的计算过程叫做Reducer.
		// Reducer是一个函数,他接受Action和当前State作为参数,返回一个新的State,作为加法的运算结果.
		// createStore接受Reducer作为参数,生成一个新的Stroe.以后每当store.dispatch发送过来一个新的Action,就会自动调用Reducer,得到新的state.
		onDecrement={ () => store.dispatch({ type: 'DECREMENT' }) } />, document.getElementById('root'));

render();

// stroe.subscribe方法设置监听函数,一旦state发生变化,就自动执行这个函数,显然,只要把View的更新函数(render或者setState方法)放入listen,
// 就会实现View的自动渲染.
store.subscribe(render);
