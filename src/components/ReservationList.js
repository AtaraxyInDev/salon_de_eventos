// ReservationList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, ListGroup, Button, Badge } from 'react-bootstrap';

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        axios.get('/api/reservations')
            .then(response => {
                setReservations(response.data);
            })
            .catch(error => {
                console.error('Error fetching reservations:', error);
            });
    }, []);

    const cancelReservation = (id) => {
        axios.delete(`/api/reservations/${id}`)
            .then(response => {
                setReservations(reservations.filter(reservation => reservation.id !== id));
            })
            .catch(error => {
                console.error('Error canceling reservation:', error);
            });
    };

    const confirmReservation = (id) => {
        axios.patch(`/api/reservations/${id}`, { confirmed: true })
            .then(response => {
                setReservations(reservations.map(reservation =>
                    reservation.id === id ? { ...reservation, confirmed: true } : reservation));
            })
            .catch(error => {
                console.error('Error confirming reservation:', error);
            });
    };

    return (
        <Container fluid>
            <h2 className="text-center my-4">Reservas</h2>
            <ListGroup>
                {reservations.map(reservation => (
                    <ListGroup.Item key={reservation.id} className="mb-3">
                        <Row>
                            <Col xs={12} md={8}>
                                <p><strong>Salón:</strong> {reservation.salon ? reservation.salon.name : 'N/A'}</p>
                                <p><strong>Fecha:</strong> {new Date(reservation.date).toLocaleString()}</p>
                                <p><strong>Confirmada:</strong> 
                                    {reservation.confirmed ? 
                                        <Badge bg="success">Sí</Badge> : 
                                        <Badge bg="danger">No</Badge>
                                    }
                                </p>
                            </Col>
                            <Col xs={12} md={4} className="d-flex justify-content-around align-items-center mt-3 mt-md-0">
                                <Button variant="success" onClick={() => confirmReservation(reservation.id)} disabled={reservation.confirmed} className="me-2">
                                    Confirmar
                                </Button>
                                <Button variant="danger" onClick={() => cancelReservation(reservation.id)}>
                                    Cancelar
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default ReservationList;
