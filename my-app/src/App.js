import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Showroom from './Showroom';
import Navbar from './Navbar';
import Login from './Login';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (status) => {
        setIsLoggedIn(status);
    };

    return (
        <Routes>
            <Route path="/login" element={<Login  />} />
            <Route path="/showroom" element={  <Showroom /> } />
                    
        </Routes>
           
    );
}

export default App;
