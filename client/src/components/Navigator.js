import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Auth from '../utils/auth';

function Navigator() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container fluid>
                <Navbar.Brand href='/'>RPG Database</Navbar.Brand>
                <Nav variant='pills'>
                    { Auth.loggedIn() ? (
                        <Nav.Item>
                            <Nav.Link onClick={() => Auth.logout()}>
                                Logout
                            </Nav.Link>
                        </Nav.Item>
                    ) : (
                        <Nav.Item>
                            <Nav.Link href='/login'>
                                Login
                            </Nav.Link>
                        </Nav.Item>
                    )
                    }
                </Nav>
                
            </Container>
        </Navbar>
    )
};

export default Navigator;