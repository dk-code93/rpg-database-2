import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Navigator from './components/Navigator'
import Home from './pages/Home'
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import CreateCharacter from './pages/CreateCharacter';

function Main() {
    return (
        <>
            <Navigator/>
            <Container fluid>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/create/character' element={<CreateCharacter/>} />
                </Routes>
            </Container>
        </>
    )
}

export default Main;