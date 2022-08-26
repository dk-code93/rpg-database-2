import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { classes } from '../utils/data';

function CreateCharacter() {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' placeholder="Enter your character's name"/>
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Class</Form.Label>
                        <Form.Select id='class-select' placeholder='Select a class'>
                            { classes.map( option => (
                                <option key={option} value={option}>{option}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Level</Form.Label>
                        <Form.Control 
                            type='number' 
                            placeholder='1'
                            min='1'
                            />
                    </Form.Group>
                </Col>
            </Row>
            
        </Form>
    )
};

export default CreateCharacter;