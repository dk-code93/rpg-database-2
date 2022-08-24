import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

function Login() {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    const [loginUser] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await loginUser({
                variables: { ...formState }
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
            alert(e);
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>           
                <Form.Group className="mb-2" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder="Enter your email address"
                        name='email'
                        onChange={handleChange}
                        defaultValue={formState.email}
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder="Enter your password"
                        name='password'
                        onChange={handleChange}
                        defaultValue={formState.password}
                    />
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