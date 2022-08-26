import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from "../utils/auth";

function Signup() {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [addUser] = useMutation(ADD_USER);

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
            const { data } = await addUser({
                variables: { ...formState }
            });
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type='username' 
                        placeholder="Create a custom Username"
                        name="username"
                        onChange={handleChange}
                        defaultValue={formState.username}
                    />
                </Form.Group>
                
                <Form.Group className="mb-2" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder="Enter your email address"
                        name="email"
                        onChange={handleChange}
                        defaultValue={formState.email}
                    />
                </Form.Group>

                <Form.Group className="mb-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder="Create a password" 
                        name='password'
                        onChange={handleChange}
                        defaultValue={formState.password}
                    />
                </Form.Group>

                <Button 
                    variant="dark" 
                    type="submit"
                >
                    Sign up!
                </Button>
            </Form>
        </Container>
    )
}

export default Signup;