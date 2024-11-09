// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
    const { isDarkMode } = useTheme();

    return (
        <footer className={`py-3 mt-auto ${isDarkMode ? 'footer-light' : 'footer-dark'}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        © 2024 Reservas de Salones. Todos los derechos reservados.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
