import React from 'react';
import { Container } from 'react-bootstrap';
import Auth from '../utils/auth';

function Profile() {
    const user = Auth.getProfile();
    console.log(user);
    return (
        <Container>
            <h1>This is your profile!</h1>
        </Container>
    )
};

export default Profile;