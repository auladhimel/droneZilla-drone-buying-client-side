import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="MenuBar-container menubar mt-2 d-flex align-items-center">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-2">

                        <div className="logo-img">
                            <Link to="/" className=" d-flex align-items-center items">
                                <h3 className="logoname">Drone<span className="vio">Zilla</span></h3>
                            </Link>

                        </div>

                    </div>
                    <div className="col-md-10">
                        <div className="menu-container">
                            <ul className="d-flex align-items-center justify-content-end ">

                                <Link to="/" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/explore" className="items">
                                    <li>Explore</li>
                                </Link>
                                <Link to="/registration" className="items">
                                    <li>Registration</li>
                                </Link>
                                {
                                    user?.email ?
                                        <Button onClick={logout}>Logout</Button>
                                        :
                                        <Link to="/login" className="items">
                                            <li>Login</li>
                                        </Link>
                                }

                                {/* {user.email ? <small className="user-name">Signed in as <span style={{ color: "violet", fontWeight: "bold" }}>{user.displayName}</span></small> : <p></p>} */}


                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;