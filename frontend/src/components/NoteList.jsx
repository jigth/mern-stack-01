import React, { Component } from 'react'
import axios from 'axios';
import config from '../config';

// TODO: Use timeago.js here to put the date in a human-friendly human-readable format

export default class NoteList extends Component {

    baseURL = `${config.API_BASE_URL}/notes`;

    state = {
        notes: []
    }

    async componentDidMount() {
        const { data: notes } = await axios.get(this.baseURL);
        this.setState({
            notes
        });
    }

    render() {
        return (
            <div className="row">
                
                    {
                        this.state.notes.map((note, index) => {
                            return (
                                <div key={index} className="col-md-4 mt-3">
                                    <div className="card card-body">
                                        <div >{note.title}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        )
    }
}
