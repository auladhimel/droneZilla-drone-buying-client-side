import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

// footer part 
const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="about-footer">
                            <div>
                                {/* about  */}
                                <h3 className="logoname">Drone<span className="zilla">Zilla</span></h3>
                                <p>We offer several services that fall outside the scope of item writing. These services can be provided for clients who have the capacity to design and execute assessment systems.</p>
                            </div>
                            <div>
                                <h6>Follow Us On</h6>
                                <Link style={{ textDecoration: "none", color: "#FFCA2C", marginLeft: "10px" }} to="facebook.com">Facebook</Link>
                                <Link style={{ textDecoration: "none", color: "#FFCA2C", marginLeft: "10px" }} to="instagram.com">Instagram</Link>
                                <Link style={{ textDecoration: "none", color: "#FFCA2C", marginLeft: "10px" }} to="twitter.com">Twitter</Link>
                            </div>
                        </div></Col>
                    <Col>
                        <h4>Contact Info</h4>
                        <div className="address">
                            <address>House no 35, Palmall street, London, England</address>
                            <p><span className="contacts">Email: </span> <br /> info@dronezilla.com</p>
                            <p><span className="contacts">Website:</span> <br /> drone-zilla.web.app</p>
                        </div>
                    </Col>
                    <Col className="subscribe">
                        <h4>Stay In Touch</h4>
                        <input style={{ marginBottom: "5px" }} className="input" type="email" placeholder="Email Address" /> <br />
                        <Button variant="warning"> &nbsp; Subscribe Now</Button>
                    </Col>
                </Row>
                <hr />
                {/* copyright footer  */}
                <small>Copyright © 2022 <span className="depression-solution">Aulad Himel.</span>  All Rights Reserved.</small>
            </Container>
        </div>
    );
};

export default Footer;