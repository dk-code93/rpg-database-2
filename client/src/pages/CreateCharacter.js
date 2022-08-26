import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { classes } from '../utils/data';

function CreateCharacter() {
    const [formState, setFormState] = useState({
        name: '',
        level: 1,
        class: '',
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
            
        </Form>
    )
};

export default CreateCharacter;