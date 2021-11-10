import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Purchase.css';

const Purchase = () => {
    return (
        <div className="purchase">
            <h1>Purchase :</h1>
            <Form>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
                    <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3" >
                    <Form.Control type="number" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3" >
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3" >
                    <Form.Control type="text" placeholder="Description" />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3" >
                    <Form.Control type="number" placeholder="Price" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div >
    );
};

export default Purchase;