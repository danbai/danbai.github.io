import React, { Component } from 'react';
import Hobby from './hobby.jsx';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: 0,
            hobbies: ['aaa', 'bbb']
        };
    }
    _likedCallback = () => {
        this.setState({
            liked: this.state.liked + 1
        });
    }
    _addHobby = () => {
        let hobbyInput = this.refs.hobby;
        let val = hobbyInput.value;

        if (val) {
            let hobbies = this.state.hobbies;
            hobbies = [...hobbies, val];
            this.setState({
                hobbies
            }, () => {
                hobbyInput.value = '';
            })
        }
    }
    render() {
        let { name, age } = this.props;

        return (
            <div>
                <h1>我的名字叫{ name }</h1>
                <h2>我今年{ age }岁</h2>
                <button onClick={ this._likedCallback }>给我点赞</button>
                <h2>总点赞数:{ this.state.liked }</h2>
                <ul>
                    {
                        this.state.hobbies.map((item, index) => {
                            return (
                                <Hobby key={ index } hobby={ item } />
                            )
                        })
                    }
                </ul>
                <input type="text" ref="hobby" />
                <button onClick={ this._addHobby }>add hobby</button>
            </div>
        );
    }
}

export default Profile;