import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Sidebar from './pages/layout/sidebar';
import Login from './pages/login/login';
import Footer from './pages/layout/footer';

const Routers = () => {
    const isLoggedIn = localStorage.getItem('customer.token');
    const { userData } = useSelector((state) => state.login);
    const [isToggle, setIsToggle] = useState(true);

    if (isLoggedIn) {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <Sidebar isToggle={isToggle} toggle={() => setIsToggle(!isToggle)} />
                    <div className={isToggle ? "main" : "main open1"}>
                        <div className="main-content">
                            <Routes>
                                <Route path='/' element={<Dashboard />} />
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        )
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </BrowserRouter>
        );
    }
};

export default Routers;
