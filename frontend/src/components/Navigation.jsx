import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { CgNotes } from 'react-icons/cg';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar animation="false" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={ Link } to="/">
                    <CgNotes className="mr-2" />
                    Jight's User Notes App!
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={ Link } to="/">Notes</Nav.Link>
                        {/* <Nav.Link as={ Link } to="/edit/:id">Edit Notes</Nav.Link> */}
                        <Nav.Link as={ Link } to="/create">Create Note</Nav.Link>
                        <Nav.Link as={ Link } to="/user">Create User</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
