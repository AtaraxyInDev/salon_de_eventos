// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SalonList from './components/SalonList';
import ReservationList from './components/ReservationList';
import AddReservation from './components/AddReservation';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/salons" element={<SalonList />} />
                <Route path="/reservations" element={<ReservationList />} />
                <Route path="/add-reservation" element={<AddReservation />} />
            </Routes>
        </Router>
    );
}

export default App;
