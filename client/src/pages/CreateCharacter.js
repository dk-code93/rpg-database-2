import React, { useState } from 'react';
import { Form, Row, Col, Stack } from 'react-bootstrap';
import { classes } from '../utils/data';

function CreateCharacter() {
    const [formState, setFormState] = useState({
        name: '',
        level: 1,
        class: '',
        stats: {
            str: 0,
            dex: 0, 
            int: 0,
            cha: 0,
            wis: 0,
            con: 0,
        }
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    return (
        <Form>
            {/* Character name */}
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type='text' 
                    name='name'
                    placeholder="Enter your character's full name"
                    value={formState.name}
                    onChange={handleChange}
                />
            </Form.Group>

            <Row>
                <Col>
                {/* Class select */}
                    <Form.Group>
                        <Form.Label>Class</Form.Label>
                        <Form.Select 
                            id='class-select' 
                            name='class'
                            value={formState.class}
                            onChange={handleChange}
                        >
                            <option value='' disabled>Select a class</option>
                            { classes.map( classOption => (
                                <option key={classOption} value={classOption}>{classOption}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                {/* Level */}
                    <Form.Group>
                        <Form.Label>Level</Form.Label>
                        <Form.Control 
                            type='number' 
                            name='level'
                            placeholder='1'
                            min='1'
                            value={formState.level}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Stack>
                    <Form.Group>
                        <Form.Label>Strength</Form.Label>
                        <Form.Control
                            type='number'
                            
                        />
                    </Form.Group>
                </Stack>
            </Row>
            
        </Form>
    )
};

export default CreateCharacter;