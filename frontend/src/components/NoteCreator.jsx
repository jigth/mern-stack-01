/**
 * This component is used for both Notes Creation and Updating depending on the route!
 * If route hasn't an ID then this component will be rendered in "Creation Mode"
 * If route has an ID in url params, then this component will be rendering in "Updating Mode"
 * (i.e: Load the data of specified ID to be edited!)
 */

import React, { Component } from 'react';
import axios from 'axios';

//import { DatePicker } from 'react-date-picker';
// TODO: Use React-Datepicker here to capture user's date
// TODO: To get url params just use this React Router instruction "this.props.match.params"
// TODO: Using the previous step, create "Creation Mode" and "Updating Mode" in this component!

export default class NoteCreator extends Component {
    baseURL = "http://localhost:4700/api/notes";

    state = {
        editting: false,  // Used to edit specific note if required
        noteId: "",
        title: "",
        content: "",
        author: "",
    }

    submitNote = async (e) => {
        e.preventDefault();  // Avoid default page refresh on submitting
        const { title, content, author } = this.state;
        // New or updated note!
        const newNote = {
            title,
            content,
            author
        }
        if (this.state.editting) {
            await axios.put(`${this.baseURL}/${this.state.noteId}`, {
                ...newNote
            });
            alert("Note Edited");
        } else {
            await axios.post(`${this.baseURL}`, {
                ...newNote
            });
            alert("Note Created");
        }
        
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // Fetch note by Id and sync it with component's state
    fetchExistingNote = async (noteId) => {
        try {
            // Get axios 'data' prop and alias it as 'note'
            const { data: note } = await axios.get(`${this.baseURL}/${noteId}`);
            this.setState({
                title: note.title,
                content: note.content,
                author: note.author
            });
            return note;
        } catch (error) {
            console.log("Note not found :C");
        }
    }

    async componentDidMount() {
        const noteId = this.props.match.params.id;
        this.setState({
            noteId
        });
        if (noteId) {
            this.setState({ editting: true });
            await this.fetchExistingNote(noteId);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-header">
                            <h2>{this.props.match.params.id ? "Edit Note" : "Create Note"}</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.submitNote}>
                                <div className="form-group">
                                    <label htmlFor="note-title">Note title:</label>
                                    <input
                                        type="text"
                                        id="note-title"
                                        name="title"
                                        placeholder="Example: Do my science homework"
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="note-content">Note description:</label>
                                    <textarea
                                        id="note-content"
                                        name="content"
                                        placeholder="Enter your note description here..."
                                        value={this.state.content}
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                    />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="note-author">Note author:</label>
                                    <input
                                        type="text"
                                        name="author"
                                        placeholder="Example: John Smith"
                                        value={this.state.author}
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-danger btn-block"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
