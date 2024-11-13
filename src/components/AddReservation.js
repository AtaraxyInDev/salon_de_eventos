import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';

const AddReservation = () => {
    const [salons, setSalons] = useState([]);
    const [selectedSalon, setSelectedSalon] = useState('');
    const [date, setDate] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [specialPreferences, setSpecialPreferences] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('');

    useEffect(() => {
        axios.get('/api/salons')
            .then(response => {
                setSalons(response.data);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedSalon || !date || !userName || !userEmail || !userPhone) {
            setMessage('Por favor, completa todos los campos requeridos.');
            setVariant('danger');
            return;
        }

        setLoading(true);
        
        // Convertir la fecha a formato ISO 8601
        const isoDate = new Date(date).toISOString();

        const newReservation = { 
            salon: { id: selectedSalon }, 
            date: isoDate, 
            userName, 
            userEmail, 
            userPhone, 
            numberOfGuests, 
            eventDescription, 
            specialPreferences, 
            confirmed: false 
        };

        axios.post('/api/reservations', newReservation)
            .then(response => {
                setMessage('Reserva creada exitosamente!');
                setVariant('success');
                setLoading(false);
                // Limpiar formulario
                setSelectedSalon('');
                setDate('');
                setUserName('');
                setUserEmail('');
                setUserPhone('');
                setNumberOfGuests('');
                setEventDescription('');
                setSpecialPreferences('');
            })
            .catch(error => {
                setMessage('Hubo un error al crear la reserva!');
                setVariant('danger');
                setLoading(false);
            });
    };

    return (
        <Container>
            <h2>Crear Reserva</h2>
            {message && <Alert variant={variant}>{message}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formSalon">
                    <Form.Label>Salón</Form.Label>
                    <Form.Control as="select" value={selectedSalon} onChange={e => setSelectedSalon(e.target.value)}>
                        <option value="">Selecciona un salón</option>
                        {salons.map(salon => (
                            <option key={salon.id} value={salon.id}>{salon.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formDate">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="datetime-local" value={date} onChange={e => setDate(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formUserName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={userName} onChange={e => setUserName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formUserEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formUserPhone">
                    <Form.Label>Número de Teléfono</Form.Label>
                    <Form.Control type="tel" value={userPhone} onChange={e => setUserPhone(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formNumberOfGuests">
                    <Form.Label>Número de Invitados</Form.Label>
                    <Form.Control type="number" value={numberOfGuests} onChange={e => setNumberOfGuests(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formEventDescription">
                    <Form.Label>Descripción del Evento</Form.Label>
                    <Form.Control as="textarea" rows={3} value={eventDescription} onChange={e => setEventDescription(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formSpecialPreferences">
                    <Form.Label>Preferencias Especiales</Form.Label>
                    <Form.Control as="textarea" rows={3} value={specialPreferences} onChange={e => setSpecialPreferences(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
                    {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Reservar'}
                </Button>
            </Form>
        </Container>
    );
};

export default AddReservation;
