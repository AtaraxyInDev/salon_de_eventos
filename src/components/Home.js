// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
            <Row className="text-center mb-4">
                <Col>
                    <h1 className="display-4">Bienvenido al Sistema de Reservas para Salones de Eventos</h1>
                    <p className="lead">Gestiona tus reservas de salones de manera sencilla y rápida</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/salons">
                        <Button variant="primary" className="m-3 px-4 py-2">Ver Salones</Button>
                    </Link>
                    <Link to="/reservations">
                        <Button variant="primary" className="m-3 px-4 py-2">Ver Reservas</Button>
                    </Link>
                    <Link to="/add-reservation">
                        <Button variant="primary" className="m-3 px-4 py-2">Crear Reserva</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
