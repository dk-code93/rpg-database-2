import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Nav() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container fluid>
                <Navbar.Brand href='/'>RPG Database</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Nav;