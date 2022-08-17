import React from "react";
import { Container, Form, Button } from "react-bootstrap";


function Login() {
    return (
        <Container>
            <Form>           
                <Form.Group className="mb-2" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder="Enter your email address" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder="Enter your password" />
                </Form.Group>

                <Button variant="dark" type='submit'>
                    Log in!
                </Button>

                <Button variant="dark" href='/signup'>
                    Don't have an account?
                </Button>
            </Form>
        </Container>
    )
}

export default Login;