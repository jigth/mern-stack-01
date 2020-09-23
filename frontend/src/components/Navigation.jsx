import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar animation="false" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
