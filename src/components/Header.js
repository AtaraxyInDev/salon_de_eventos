// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Reservas de Salones</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/salons">
                        <Nav.Link>Salones</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/reservations">
                        <Nav.Link>Reservas</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/add-reservation">
                        <Nav.Link>Crear Reserva</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
