import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigator() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container fluid>
                <Navbar.Brand href='/'>RPG Database</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Navigator;