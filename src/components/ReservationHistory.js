// src/components/ReservationHistory.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ReservationHistory = () => {
    const { userId } = useParams();
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        axios.get(`/api/reservations/user/${userId}`)
            .then(response => {
                setReservations(response.data);
            })
            .catch(error => {
                console.error('Error fetching reservations:', error);
            });
    }, [userId]);

    return (
        <Container>
            <h2>Historial de Reservas</h2>
            <ListGroup>
                {reservations.map(reservation => (
                    <ListGroup.Item key={reservation.id}>
                        Salón: {reservation.salon ? reservation.salon.name : 'N/A'} - Fecha: {new Date(reservation.date).toLocaleString()} - Confirmada: {reservation.confirmed ? 'Sí' : 'No'}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default ReservationHistory;
