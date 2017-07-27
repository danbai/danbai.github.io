import React, { Component } from 'react';
import { render } from 'react-dom';
import ListTitle from '../components/ListTitle.js';
import ListItem from '../components/listItem.js';

class List extends Component {
	static childContextTypes = {
		txt: React.PropTypes.string
	};
	constructor(props) {
		super(props);
		this.state = {
			title: '父组件向子组件通信',
			list: [
				{
					text: 1,
					checked: true
				}, {
					text: 2,
					checked: false
				}
			]
		};
	}
	onItemChange = (item) => {
		const { list } = this.state;

		this.setState({
			list: list.map((prevItem) => {
				return {
					text: prevItem.text,
					checked: prevItem.text === item.text ? !prevItem.checked : prevItem.checked
				}
			})
		});
	}
	onTitleChange = () => {
		this.setState({
			title: '利用回掉函数,子组件向父组件通信'
		})
	}
	onEmitterChange = () => {
		this.setState({
			emit: 'haha'
		});
	}
	getChildContext() {
		return {
			txt: 'aaaa'
		};
	}
	render() {
		return (
			<div>
				<ListTitle title={ this.state.title } onTitleChange={ this.onTitleChange } />
				<ul>
					{
						this.state.list.map((item, index) => {
							return (
								<ListItem
									key={ index }
									value={ item.text }
									checked={ item.checked }
									onChange={ this.onItemChange.bind(this, item) } />
							)
						})
					}
				</ul>
			</div>
		);
	}
}

render(<List />, document.getElementById('root'));