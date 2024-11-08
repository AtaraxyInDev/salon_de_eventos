// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <h1>Bienvenido al Sistema de Reservas para Salones de Eventos</h1>
                    <Link to="/salons">
                        <Button variant="primary" className="m-2">Ver Salones</Button>
                    </Link>
                    <Link to="/reservations">
                        <Button variant="primary" className="m-2">Ver Reservas</Button>
                    </Link>
                    <Link to="/add-reservation">
                        <Button variant="primary" className="m-2">Crear Reserva</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
