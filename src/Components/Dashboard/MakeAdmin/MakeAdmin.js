import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const handleAdminSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <Form onSubmit={handleAdminSubmit}>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Button type="submit">Make Admin</Button>

            </Form>
        </div>
    );
};

export default MakeAdmin;