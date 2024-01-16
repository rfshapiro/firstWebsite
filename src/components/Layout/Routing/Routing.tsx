import React from 'react';
import logo from './logo.svg';
import './Routing.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../../Home/Home';

function Routing() {
  return (
    <div className="Routing">
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
    </div>
  );
}

export default Routing;