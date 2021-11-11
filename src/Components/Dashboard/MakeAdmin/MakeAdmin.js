import React, { useState } from 'react';
import { Alert, Button, Col, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }


    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <Form style={{ width: "30%", margin: "auto" }} onSubmit={handleAdminSubmit}>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    <Col sm="10">
                        <Form.Control onBlur={handleOnBlur} type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                <Button type="submit">Make Admin</Button>

            </Form>

            {success && <Alert style={{ width: "30%", margin: "auto", marginTop: "10px" }} variant="success">Admin Created Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;