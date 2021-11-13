import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Registration.css';
import imageOne from '../../images/image-2.png'

const Registration = () => {
    const [loginData, setLoginData] = useState({})

    const { user, registerUser, IsLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);


        console.log(field, value);

    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

    }
    return (
        <Container className="d-flex">
            <Col className="registration">
                <h2 style={{ paddingTop: "20px", marginBottom: "30px", fontSize: "28px", fontWeight: "bold" }}>Please Register</h2>
                {!IsLoading && <Form onSubmit={handleLoginSubmit}>
                    <Form.Group style={{ width: '60%', margin: 'auto' }} className="mb-3">
                        <Form.Control type="text" name="name" onBlur={handleOnBlur} placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group style={{ width: '60%', margin: 'auto' }} className="mb-3">
                        <Form.Control type="email" name="email" onBlur={handleOnBlur} placeholder="Your Email" />
                    </Form.Group>
                    <Form.Group style={{ width: '60%', margin: 'auto' }} className="mb-3">
                        <Form.Control type="password" name="password" onBlur={handleOnBlur} placeholder="Your Password" />

                    </Form.Group>

                    <Form.Group style={{ width: '60%', margin: 'auto' }} className="mb-3">
                        <Form.Control type="password" name="password2" onBlur={handleOnBlur} placeholder="Retype Your Password" />
                        <Button className="mt-3" variant="warning" type="submit">
                            Register
                        </Button>
                    </Form.Group>

                    <NavLink to='/login'>
                        <Button className="mb-4 px-4" variant="outline-warning" type="submit">
                            Already Registered ? Please Login!
                        </Button>
                    </NavLink>

                </Form>}
                {
                    IsLoading && <Spinner animation="border" />
                }
                {
                    user?.email && <Alert variant="success">
                        User created successfully!
                    </Alert>
                }
                {
                    authError && <Alert variant="danger">
                        {authError}
                    </Alert>
                }
            </Col>
            <Col className="image">
                <img src={imageOne} alt="" />
            </Col>
        </Container>
    );
};

export default Registration;