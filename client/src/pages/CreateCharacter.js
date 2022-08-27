import React, { useState } from 'react';
import { Form, Row, Col, Stack, Button } from 'react-bootstrap';
import { classes, statAttributes } from '../utils/data';

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
        // If the field is a stat, update differently
        if(event.target.classList.contains('statistic')) {
            setFormState({
                ...formState,
                stats: {
                    ...formState.stats,
                    [name]: value
                }
            });
            return;
        }
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
                <Stack direction='horizontal' gap={2}>
                    { statAttributes.map( stat => (
                        <Form.Group key={stat.name}>
                            <Form.Label>{stat.name}</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='0'
                                name={stat.short}
                                min='0'
                                className='statistic'
                                value={formState.stats[stat.short]}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    ))}
                </Stack>
            </Row>
            
        </Form>
    )
};

export default CreateCharacter;