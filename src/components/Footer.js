// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3 mt-auto">
            <Container>
                <Row>
                    <Col className="text-center">
                        &copy; 2024 Reservas de Salones. Todos los derechos reservados.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
