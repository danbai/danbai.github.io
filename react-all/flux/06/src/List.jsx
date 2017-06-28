import React, { Component } from 'react';
import { render } from 'react-dom';
import ListItem from './ListItem.jsx';

class List extends Component {
    static defaultProps = {
        list: [],
        handleItemChange: () => {}
    };
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list.map((entry) => {
                    return {
                        text: entry.text,
                        checked: entry.checked
                    }
                })
        }
    }
    _onItemChange = (entry) => {
        const { list } = this.state;

        this.setState({
            list: list.map((prevEntry) => {
                return {
                    text: prevEntry.text,
                    checked: prevEntry.text === entry.text ? !prevEntry.checked : prevEntry.checked
                }
            })
        });

        this.props.handleItemChange(entry);
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((entry, index) => {
                            return <ListItem
                                        key={ `list-${index}` }
                                        value={ entry.text }
                                        checked={ entry.checked }
                                        onChange={ this._onItemChange } />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;