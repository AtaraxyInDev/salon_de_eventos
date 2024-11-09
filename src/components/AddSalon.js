// src/components/AddSalon.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const AddSalon = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [capacity, setCapacity] = useState('');
    const [eventType, setEventType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSalon = { name, location, capacity, eventType };
        axios.post('/api/salons', newSalon)
            .then(response => {
                alert('Salón creado exitosamente!');
                // Opcionalmente, limpiar el formulario
                setName('');
                setLocation('');
                setCapacity('');
                setEventType('');
            })
            .catch(error => {
                console.error('Hubo un error al crear el salón!', error);
            });
    };

    return (
        <Container>
            <h2>Registrar Nuevo Salón</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Nombre del Salón</Form.Label>
                    <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formLocation">
                    <Form.Label>Ubicación</Form.Label>
                    <Form.Control type="text" value={location} onChange={e => setLocation(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formCapacity">
                    <Form.Label>Capacidad</Form.Label>
                    <Form.Control type="number" value={capacity} onChange={e => setCapacity(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formEventType">
                    <Form.Label>Tipo de Evento</Form.Label>
                    <Form.Control type="text" value={eventType} onChange={e => setEventType(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Registrar Salón
                </Button>
            </Form>
        </Container>
    );
};

export default AddSalon;
