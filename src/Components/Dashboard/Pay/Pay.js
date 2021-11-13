import React from 'react';
import { Col, Container } from 'react-bootstrap';
import paymentImage from '../../../images/image-6.jpeg';
// payment page 
const Pay = () => {
    return (
        <Container>
            <Col>
                <h2 style={{ paddingTop: "20px", fontSize: "30px", fontWeight: "bold", }}>Payment System Coming Soon</h2>
            </Col>
            <Col>
                <img className="mt-5" src={paymentImage} alt="" />
            </Col>
        </Container>
    );
};

export default Pay;