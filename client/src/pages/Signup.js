import React from "react";
import { Container, Form, Button } from "react-bootstrap";


function Signup() {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-2" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='username' placeholder="Create a custom Username" />
                </Form.Group>
                
                <Form.Group className="mb-2" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder="Enter your email address" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder="Create a password" />
                </Form.Group>

                <Button variant="dark" type='submit'>
                    Sign up!
                </Button>
            </Form>
        </Container>
    )
}

export default Signup;