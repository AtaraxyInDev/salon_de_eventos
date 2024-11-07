// src/components/ReservationList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    return (
        <div>
            <h2>Reservas</h2>
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation.id}>
                        Salón: {reservation.salon ? reservation.salon.name : 'N/A'} - Fecha: {new Date(reservation.date).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationList;
