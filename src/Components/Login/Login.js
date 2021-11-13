import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import imageLogin from '../../images/image-1.jpeg';
// login page 
const Login = () => {
    // states 
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
        // login form 
        <Container className="d-flex pt-3">
            <Col className="col-md-4">
                <h2 style={{ paddingTop: "70px", paddingBottom: "25px", fontSize: "25px", fontWeight: "bold" }}>Please Login</h2>
                <Form onSubmit={handleLoginSubmit}>
                    <Form.Group style={{ width: '90%', margin: 'auto' }} className="mb-3">
                        <Form.Control type="email" name="email" onBlur={handleOnChange} placeholder="Your Email" />
                    </Form.Group>
                    <Form.Group style={{ width: '90%', margin: 'auto' }} className="mb-3">
                        <Form.Control type="password" name="password" onBlur={handleOnChange} placeholder="Your Password" />

                        <Button className="mt-3 px-4" variant="warning" type="submit">
                            Login
                        </Button>
                    </Form.Group>

                    <NavLink to='/registration'>
                        <Button className="mb-3" variant="outline-warning" type="submit">
                            New user ? Please Register!
                        </Button>
                    </NavLink>
                    {/* conditional rendering  */}
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
            </Col>
            <Col className="col-md-8 ms-5">
                <img className="mt-2 w-100" src={imageLogin} alt="" />
            </Col>
        </Container>
    );
};

export default Login;