// src/components/SalonList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SalonList = () => {
    const [salons, setSalons] = useState([]);

    useEffect(() => {
        axios.get('/api/salons')
            .then(response => {
                setSalons(response.data);
            })
            .catch(error => {
                console.error('Error fetching salons:', error);
            });
    }, []);

    return (
        <div>
            <h2>Salones</h2>
            <ul>
                {salons.map(salon => (
                    <li key={salon.id}>{salon.name} - {salon.location}</li>
                ))}
            </ul>
        </div>
    );
};

export default SalonList;
