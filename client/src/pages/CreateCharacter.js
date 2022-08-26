import React from 'react';
import { Form } from 'react-bootstrap';

function CreateCharacter() {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder="Enter your character's name"/>
            </Form.Group>
        </Form>
    )
};

export default CreateCharacter;