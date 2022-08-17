import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Navigator from './components/Navigator'
import Home from './pages/Home'

function Main() {
    return (
        <Container fluid>
            <Navigator/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='login' element={<Login/>} />
            </Routes>
        </Container>
    )
}

export default Main;