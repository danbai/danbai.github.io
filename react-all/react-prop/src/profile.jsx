import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Hobby from './hobby.jsx';
import Hobby2 from './hobby2.jsx';

class Profile extends Component {
    static defaultProps = {
        name: 'default name',
        age: 'default age'
    };
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            liked: 0,
            hobbies: ['skateboarding', 'rock music']
        };
    } 
    _likedCallback = () => {
        this.setState({
            liked: this.state.liked + 1
        });
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                liked: this.state.liked + 1
            });
        }, 1000);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log(this.props);
    
        if (nextProps.age === this.props.age) {
            this.setState({
                liked: this.state.liked - 1
            });
        }
    }
    shouldComponentUpdate(nextProps) {
        console.log(JSON.stringify(nextProps));
        return true;
    }
    componentWillUpdate() {

    }
    componentDidUpdate() {

    }
    componentWillUnmount() {

    }
    _addHobbyCallback = () => {
        let hobbyInput = this.refs.hobby;
        let val = hobbyInput.value;

        if (val) {
            let hobbies = this.state.hobbies;
            hobbies = [...hobbies, val];

            this.setState({
                hobbies
            }, () => {
                hobbyInput.value = '';
            });
        }
    }
    render() {
        let { name, age } = this.props;
        return (
            <div className="profile-component">
                <h1>我的名字叫 { name }</h1>
                <h2>我今年 { age } 岁</h2>
                <button onClick={ this._likedCallback }>给我点赞</button>
                <h2>点赞总数: { this.state.liked }</h2>
                <h2>我的爱好: </h2>
                <ul>
                    {
                        this.state.hobbies.map((item, index) => {
                            return <Hobby key={ index } hobby={ item } />
                        })
                    }
                </ul>
                <h2>我的爱好2: </h2>
                <ul>
                    {
                        this.state.hobbies.map((item, index) => {
                            return <Hobby2 key={ index } hobby={ item } />
                        })
                    }
                </ul>
                <input type="text" ref="hobby" />
                <button onClick={ this._addHobbyCallback }>添加爱好</button>
            </div>
        );
    }
}

export default Profile;