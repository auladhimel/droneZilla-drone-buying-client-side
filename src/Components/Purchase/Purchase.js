import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Purchase.css';

const Purchase = () => {
    const { user } = useAuth();

    const handlePurchasingSubmit = e => {
        alert('Purchasing');
        e.preventDefault();
    }
    return (
        <div className="purchase">
            <h1>Purchase :</h1>
            <Form onSubmit={handlePurchasingSubmit}>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
                    <Form.Control type="text" placeholder="Your Name" value={user.displayName} />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
                    <Form.Control type="email" placeholder="Your Email" value={user.email} />
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