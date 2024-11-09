// src/components/SalonList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SalonList = () => {
    const [salons, setSalons] = useState([]);

    useEffect(() => {
        axios.get('/api/salons')
            .then(response => {
                setSalons(response.data);
            })
            .catch(error => {
                console.error('Error fetching salons:', error);
            });
    }, []);

    return (
        <Container>
            <h2 className="text-center">Salones Disponibles</h2>
            <Row>
                {salons.map(salon => (
                    <Col key={salon.id} sm={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{salon.name}</Card.Title>
                                <Card.Text>Ubicación: {salon.location}</Card.Text>
                                <Card.Text>Capacidad: {salon.capacity} personas</Card.Text>
                                <Card.Text>Tipo de Evento: {salon.eventType}</Card.Text>
                                <Link to={`/salon/${salon.id}`}>
                                    <Button variant="primary">Ver Participantes</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default SalonList;
