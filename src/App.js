// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import SalonList from "./components/SalonList";
import ReservationList from "./components/ReservationList";
import AddReservation from "./components/AddReservation";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SalonDetail from "./components/SalonDetail";
import ReservationHistory from './components/ReservationHistory';
import "./App.css";

function App() {
  return (
    <Router>
      {" "}
      <div className="d-flex flex-column min-vh-100">
        {" "}
        <Header />{" "}
        <Container className="flex-grow-1 mt-4">
          {" "}
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />{" "}
            <Route path="/salons" element={<SalonList />} />{" "}
            <Route path="/reservations" element={<ReservationList />} />{" "}
            <Route path="/add-reservation" element={<AddReservation />} />{" "}
            <Route path="/salon/:salonId" element={<SalonDetail />} />{" "}
            <Route path="/history/:userId" element={<ReservationHistory />} />{" "}
          </Routes>{" "}
        </Container>{" "}
        <Footer />{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
