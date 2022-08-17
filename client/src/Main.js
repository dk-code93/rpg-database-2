import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Nav from './components/Nav'
import Home from './pages/Home'

function Main() {
    return (
        <Container fluid>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='login' element={<Login/>} />
            </Routes>
        </Container>
    )
}

export default Main;