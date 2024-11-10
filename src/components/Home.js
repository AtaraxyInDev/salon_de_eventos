// Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid className="d-flex flex-column justify-content-center align-items-center min-vh-100">
            <Row className="text-center mb-4">
                <Col>
                    <h1 className="display-4">Bienvenido al Sistema de Reservas para Salones de Eventos</h1>
                    <p className="lead">Gestiona tus reservas de salones de manera sencilla y rápida</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
