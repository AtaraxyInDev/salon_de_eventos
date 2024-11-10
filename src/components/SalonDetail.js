// SalonDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';
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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                        <th>Confirmada</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation, index) => (
                        <tr key={reservation.id}>
                            <td>{index + 1}</td> {/* Aquí se muestra el número de participante */}
                            <td>{reservation.userName}</td>
                            <td>{reservation.userEmail}</td>
                            <td>{reservation.userPhone}</td>
                            <td>{reservation.confirmed ? 'Sí' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default SalonDetail;
