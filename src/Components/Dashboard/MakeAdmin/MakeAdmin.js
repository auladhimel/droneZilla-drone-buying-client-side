import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form } from 'react-bootstrap';
import makeAdminImage from '../../../images/image-9.jpeg';
// make admin 
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    // send data 
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://thawing-mesa-49246.herokuapp.com/admin', {
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
        <Container className="d-flex ps-5 ms-5 pt-5">
            <Col>
                {/* make admin form  */}
                <h2 style={{ paddingTop: "50px", fontSize: "25px", fontWeight: "bold" }}>Make an Admin</h2>
                <Form style={{ width: "100%", margin: "auto" }} onSubmit={handleAdminSubmit}>
                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                        <Col>
                            <Form.Control onBlur={handleOnBlur} type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>
                    <Button variant="warning" type="submit">Make Admin</Button>
                </Form>

                {success && <Alert style={{ width: "100%", margin: "auto", marginTop: "10px" }} variant="success">Admin Created Successfully</Alert>}
            </Col>
            <Col className="makeAdminImage">
                <img src={makeAdminImage} alt="" /></Col>
        </Container>
    );
};

export default MakeAdmin;