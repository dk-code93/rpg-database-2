import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigator() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container fluid>
                <Navbar.Brand href='/'>RPG Database</Navbar.Brand>
                <Nav variant='pills'>
                    <Nav.Item>
                        <Nav.Link href='/login'>
                            Login
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default Navigator;