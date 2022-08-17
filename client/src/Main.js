import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Nav from './components/Nav'

function Main() {
    return (
        <Container fluid>
            <Nav/>
            <Routes>
                <Route path='/' element={<Login/>} />
            </Routes>
        </Container>
    )
}

export default Main;