import React, { Component } from 'react';
import { render } from 'react-dom';

class Users extends Component {
    render() {
        return (
            <div>
                <h1>Users</h1>
                <div className="master">
                    <ul>
                        {
                            this.state.users.map(user = > {
                                return (
                                    <li key={ user.id }><Link to={ `/user/${ user.id }` }>{ user.name }</Link></li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="detail">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Users