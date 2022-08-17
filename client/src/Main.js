import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Navigator from './components/Navigator'
import Home from './pages/Home'
import Signup from './pages/Signup';

function Main() {
    return (
        <Container fluid>
            <Navigator/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
        </Container>
    )
}

export default Main;