import React, { Component } from 'react'
import axios from 'axios';

const baseURL = "http://localhost:4700/api/users";

export default class UserCreator extends Component {

    state = {
        userList: [],
        username: ""
    };

    async componentDidMount() {
        await this.getUsers();    
    }

    getUsers = async () => {
        const { data: users } = await axios.get(baseURL);
        this.setState({ userList: users });
    }

    // Detect which input was modified and update state according to its name
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Save created user to database
    postUser = async (newUserName) => {
        await axios.post(baseURL, { 
            username: newUserName 
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.postUser(this.state.username);
        
        this.setState({
            username: ""
        });
        // Update User List
        await this.getUsers();
    }

    deleteUser = async (userId) => {
        await axios.delete(`${ baseURL }/${ userId }`);
        await this.getUsers();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h4>Create New User</h4>
                        <form    onSubmit={ this.handleSubmit }>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name="username"
                                    value={ this.state.username }
                                    onChange={ this.handleChange }
                                    id="username-input"
                                    className="form-control"
                                    placeholder="Example: myFunnyUser853"
                                />
                                <small className="text-muted">
                                    Press "Enter" to Submit 
                                    <span className="text-info"> (username must be unique!) </span>
                                </small> <br />
                                <small className="text-success">If user is not beign created, please reload the page!</small>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-8 mt-md-0 mt-sm-3">
                    <ul className="list-group">
                        {
                            this.state.userList.map(user => 
                                <li 
                                    key={ user._id }
                                    className="list-group-item list-group-item-action d-flex"
                                    >
                                    { user.username } 
                                    <button 
                                        className="btn btn-danger ml-auto" 
                                        onClick={ () => this.deleteUser(user._id) }
                                        > X </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
