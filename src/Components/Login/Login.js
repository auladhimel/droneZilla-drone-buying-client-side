import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, IsLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);


        console.log(field, value);

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();

    }
    return (
        <div>
            <h2>Please Login</h2>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
                    <Form.Control type="email" name="email" onBlur={handleOnChange} placeholder="Your Email" />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
                    <Form.Control type="password" name="password" onBlur={handleOnChange} placeholder="Your Password" />

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form.Group>

                <NavLink to='/registration'>
                    <Button variant="outline-info" type="submit">
                        New user ? Please Register!
                    </Button>
                </NavLink>

                {
                    IsLoading && <Spinner animation="border" />
                }
                {
                    user?.email && <Alert variant="success">
                        Login successfully!
                    </Alert>
                }
                {
                    authError && <Alert variant="danger">
                        {authError}
                    </Alert>
                }
            </Form>
        </div>
    );
};

export default Login;