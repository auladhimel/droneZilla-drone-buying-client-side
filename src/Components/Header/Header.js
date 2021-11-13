import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
// header part 
const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="MenuBar-container fixed-top menubar d-flex align-items-center">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-1">
                        <div className="logo-img">
                            <Link to="/" className=" d-flex align-items-center items">
                                <h3 className="logoname">Drone<span className="zilla">Zilla</span></h3>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-11">
                        <div className="menu-container">
                            <ul className="col-sm-12 d-flex align-items-center justify-content-end">
                                <Link to="/" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/explore" className="items">
                                    <li>Explore</li>
                                </Link>
                                <Link to="/registration" className="items">
                                    <li>Registration</li>
                                </Link>
                                {/* conditional rendering  */}
                                {
                                    user?.email ?
                                        <Link to="/dashboard" className="items">
                                            <li>Dashboard</li>
                                        </Link>
                                        :
                                        <Link to="/login" className="items">
                                            <li>Login</li>
                                        </Link>
                                }
                                {
                                    user?.email ?
                                        <Button style={{ marginTop: "20px" }} variant="warning" onClick={logout}>Logout</Button>
                                        :
                                        <p></p>
                                }
                                {user.email ? <small className="user-name">Signed in as <span style={{ color: "#FFCA2C", fontWeight: "bold" }}>{user.displayName}</span></small> : <p></p>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;