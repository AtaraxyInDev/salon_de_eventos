// src/components/AddReservation.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddReservation = () => {
    const [salons, setSalons] = useState([]);
    const [selectedSalon, setSelectedSalon] = useState('');
    const [date, setDate] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        axios.get('/api/salons')
            .then(response => {
                setSalons(response.data);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReservation = { salon: { id: selectedSalon }, date, userId, confirmed: false };
        axios.post('/api/reservations', newReservation)
            .then(response => {
                alert('Reserva creada!');
            })
            .catch(error => {
                console.error('Hubo un error al crear la reserva!', error);
            });
    };

    return (
        <div>
            <h2>Crear Reserva</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Salón:
                    <select value={selectedSalon} onChange={e => setSelectedSalon(e.target.value)}>
                        <option value="">Selecciona un salón</option>
                        {salons.map(salon => (
                            <option key={salon.id} value={salon.id}>{salon.name}</option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Fecha:
                    <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} />
                </label>
                <br />
                <label>
                    ID del Usuario:
                    <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
                </label>
                <br />
                <button type="submit">Reservar</button>
            </form>
        </div>
    );
};

export default AddReservation;
