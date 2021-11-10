import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="about-footer">
                            <div>
                                {/* about  */}
                                <h3 className="logoname">Drone<span className="vio">Zilla</span></h3>
                                <p>We offer several services that fall outside the scope of item writing. These services can be provided for clients who have the capacity to design and execute assessment systems.</p>
                            </div>
                            <div>
                                <h4>Follow Us On</h4>
                                <Link to="facebook.com">facebook</Link> <br />
                                <Link to="instagram.com">instagram</Link> <br />
                                <Link to="twitter.com">twitter</Link> <br />
                            </div>
                        </div></Col>
                    <Col>
                        <h4>Contact Info</h4>
                        <div className="address">
                            <address>House no 35, Palmall street, London, England</address>
                            <p><span className="contacts">Email: </span> <br /> info@travio.com</p>
                            <p><span className="contacts">Support:</span> <br /> Support: +1 325 562 3265</p>
                            <p><span className="contacts">Website:</span> <br /> www.travio.com</p>
                        </div>
                    </Col>
                    <Col className="subscribe">
                        <h4>Stay In Touch</h4>
                        <input className="input" type="email" placeholder="Email Address" />
                        <button> &nbsp; Subscribe Now</button>
                    </Col>
                </Row>
                <hr />
                {/* copyright footer  */}
                <small>Copyright © 2021 <span className="depression-solution">Aulad Himel.</span>  All Rights Reserved.</small>
            </Container>
        </div>
    );
};

export default Footer;