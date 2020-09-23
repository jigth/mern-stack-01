import React, { Component } from 'react'
import axios from 'axios';

export default class UserCreator extends Component {

    state = {
        userList: []
    }

    async componentDidMount() {
        const { data: users } = await axios.get("http://localhost:4700/api/users");
        this.setState({ userList: users });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form >
                            <div className="form-group">
                                <input type="text" name="" id="" className="form-control"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.userList.map(user => 
                                <li 
                                    key={ user._id }
                                    className="list-group-item list-group-item-action "    
                                    >
                                    { user.username }
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            // <div>
            //     USER CREATOR
            // {
            //     this.state.userList ? this.state.userList.map( 
            //     user => <div className="card bg-warning text-primary" key={ user._id }>{ user.username }</div>) : '' 
            // }
            // </div>
        )
    }
}
