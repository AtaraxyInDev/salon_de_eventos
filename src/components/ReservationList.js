// src/components/ReservationList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

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
        <Container>
            <h2>Reservas</h2>
            <ListGroup>
                {reservations.map(reservation => (
                    <ListGroup.Item key={reservation.id}>
                        <Row>
                            <Col>
                                Salón: {reservation.salon ? reservation.salon.name : 'N/A'} - Fecha: {new Date(reservation.date).toLocaleString()} - Confirmada: {reservation.confirmed ? 'Sí' : 'No'}
                            </Col>
                            <Col md="auto">
                                <Button variant="success" onClick={() => confirmReservation(reservation.id)} disabled={reservation.confirmed}>
                                    Confirmar
                                </Button>
                                <Button variant="danger" onClick={() => cancelReservation(reservation.id)}>Cancelar</Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default ReservationList;
