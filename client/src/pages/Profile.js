import React from 'react';
import { Container } from 'react-bootstrap';
import Auth from '../utils/auth';

function Profile() {
    const { data: { username }} = Auth.getProfile();

    return (
        <Container>
            <h1>Welcome {username}!</h1>
        </Container>
    )
};

export default Profile;