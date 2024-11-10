// Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaHome, FaClipboardList, FaPlus, FaBuilding, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <Navbar className={`justify-content-between ${isDarkMode ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`} expand="lg">
            <Navbar.Brand className="mx-auto">Reservas de Salones</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <LinkContainer to="/">
                        <Nav.Link className={`d-flex align-items-center ${isDarkMode ? 'text-dark' : 'text-white'}`}>
                            <FaHome className="me-2" /> Inicio
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/salons">
                        <Nav.Link className={`d-flex align-items-center ${isDarkMode ? 'text-dark' : 'text-white'}`}>
                            <FaClipboardList className="me-2" /> Salones
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/reservations">
                        <Nav.Link className={`d-flex align-items-center ${isDarkMode ? 'text-dark' : 'text-white'}`}>
                            <FaClipboardList className="me-2" /> Reservas
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/add-reservation">
                        <Nav.Link className={`d-flex align-items-center ${isDarkMode ? 'text-dark' : 'text-white'}`}>
                            <FaPlus className="me-2" /> Crear Reserva
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/add-salon">
                        <Nav.Link className={`d-flex align-items-center ${isDarkMode ? 'text-dark' : 'text-white'}`}>
                            <FaBuilding className="me-2" /> Registrar Salón
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                    <Nav.Link onClick={toggleTheme} className={`d-flex align-items-center ${isDarkMode ? 'text-dark' : 'text-white'}`}>
                        {isDarkMode ? <FaSun className="me-2" /> : <FaMoon className="me-2" />}
                        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
