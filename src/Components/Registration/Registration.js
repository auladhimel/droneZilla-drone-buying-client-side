import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

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
        <div>
            <h2>Please Register</h2>
            {!IsLoading && <Form onSubmit={handleLoginSubmit}>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
                    <Form.Control type="text" name="name" onBlur={handleOnBlur} placeholder="Your Name" />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
                    <Form.Control type="email" name="email" onBlur={handleOnBlur} placeholder="Your Email" />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
                    <Form.Control type="password" name="password" onBlur={handleOnBlur} placeholder="Your Password" />

                </Form.Group>

                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
                    <Form.Control type="password" name="password2" onBlur={handleOnBlur} placeholder="Retype Your Password" />
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form.Group>


                <NavLink to='/login'>
                    <Button variant="outline-info" type="submit">
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
        </div>
    );
};

export default Registration;