import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SalonDetail = () => {
    const { salonId } = useParams();
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        axios.get(`/api/reservations/salon/${salonId}`)
            .then(response => {
                setReservations(response.data);
            })
            .catch(error => {
                console.error('Error fetching reservations:', error);
            });
    }, [salonId]);

    return (
        <Container>
            <h2>Participantes del Salón</h2>
            <ListGroup>
                {reservations.map(reservation => (
                    <ListGroup.Item key={reservation.id}>
                        Usuario: {reservation.userId} - Confirmada: {reservation.confirmed ? 'Sí' : 'No'}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default SalonDetail;
