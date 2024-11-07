// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Bienvenido al Sistema de Reservas para Salones de Eventos</h1>
            <nav>
                <ul>
                    <li><Link to="/salons">Ver Salones</Link></li>
                    <li><Link to="/reservations">Ver Reservas</Link></li>
                    <li><Link to="/add-reservation">Crear Reserva</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
