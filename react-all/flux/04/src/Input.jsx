import React, { Component } from 'react';

class InputApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'a',
            textareaValue: 'b',
            radioValue: 'male',
            arr: [],
            area: '',
            areas: ['one', 'two'],
            name: '',
            age: 18,
            btn: true
        };
    }
    _handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value + e.target.value
        });
    }
    _handleTextareaChange = (e) => {
        this.setState({
            textareaValue: e.target.value + e.target.value
        })
    }
    _handleRadioChange = (e) => {
        this.setState({
            radioValue: e.target.value
        });
    }
    _handleCheckboxChange = (e) => {
        let arr = this.state.arr,
            val = e.target.value;

        if (arr.indexOf(val) === -1) {
            arr.push(val);
        } else {
            arr = arr.filter((item) => {
                return item !== val;
            });
        }

        this.setState({
            arr: arr
        });
    }
    _handleSelChange = (e) => {
        this.setState({
            area: e.target.value
        });
    }
    _handleSelMulChange = (e) => {
        const { options } = e.target;

        // 这里返回的options是一个对象,并非数组
        let areas = Object.keys(options); // ['0', '1', '2']

        console.log(areas);

        areas = areas.filter((item) => {
            return options[item].selected === true
        }).map((item) => {
            return options[item].value      // ['one', 'two', 'three']
        });

        this.setState({
            areas
        });
        
        console.log(areas);
    }
    _handleClick = () => {
        let textareaValue = this.state.textareaValue;

        this.setState({
            textareaValue: textareaValue.slice(0, 140).toUpperCase()
        });

        this.refs.noControl.value = this.refs.noControl.value.toUpperCase();
        this.refs.noControlBox.checked = !this.refs.noControlBox.checked;
    }
    _handleChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        });
    }
    render() {
        const { inputValue, textareaValue, radioValue, arr, area, areas, name, age } = this.state;

        const style = {
            color: '#ff0',
            fontSize: 30,
            backgroundColor: '#f0f'
        };

        return (
            <div>
                <p><input type="text" value={ inputValue } onChange={ this._handleInputChange } style={ style } /></p>
                <p><textarea value={ textareaValue } onChange={ this._handleTextareaChange } style={ style } /></p>
                <p>
                    <label>
                        male: 
                        <input type="radio" value="male" checked={ radioValue === 'male' } onChange={ this._handleRadioChange } />
                    </label>
                    <label>
                        female: 
                        <input type="radio" value="female" checked={ radioValue === 'female' } onChange={ this._handleRadioChange } />
                    </label>
                </p>
                <p>
                    请选择你喜欢的字母:
                    <label>
                        a:
                        <input type="checkbox" value="a" checked={ arr.indexOf('a') > -1 } onChange={ this._handleCheckboxChange } />
                    </label>
                    <label>
                        b:
                        <input type="checkbox" value="b" checked={ arr.indexOf('b') > -1 } onChange={ this._handleCheckboxChange } />
                    </label>
                    <label>
                        c:
                        <input type="checkbox" value="c" checked={ arr.indexOf('c') > -1 } onChange={ this._handleCheckboxChange } />
                    </label>
                </p>
                <p>
                    <select value={ area } onChange={ this._handleSelChange }>
                        <option value="one">one</option>
                        <option value="two">two</option>
                        <option value="three">three</option>
                    </select>
                </p>
                <p>
                    <select multiple={ true } value={ areas } onChange={ this._handleSelMulChange }>
                        <option value="one">one</option>
                        <option value="two">two</option>
                        <option value="three">three</option>
                    </select>
                </p>
                <p>
                    非受控组件:
                    <input type="text" defaultValue="aaa" ref="noControl" />
                    <input type="checkbox" defaultChecked={ true } ref="noControlBox" />
                </p>
                <p>
                    <button onClick={ this._handleClick } className={ 'btn ' + (this.state.btn ? 'btn-primary' : 'btn-common') }>button</button>
                </p>
                <p>
                    <input type="text" value={ name } onChange={ this._handleChange.bind(this, 'name') } />
                    <input type="text" value={ age } onChange={ this._handleChange.bind(this, 'age') } />
                </p>
            </div>
        );
    }
}

export default InputApp;