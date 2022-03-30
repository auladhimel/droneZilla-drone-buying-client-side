import React, { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import paymentImage from '../../../images/image-6.jpeg';
import CheckoutForm from './CheckoutForm';
// payment page 

const stripePromise= loadStripe('pk_test_51KiYvXCH8Gxu9asUXTtyyDYwx2PSW0wXir10Inz0FtplFDsiek0d93J22x9Mmxv2udXl8UtHXkUy3fCG81fhN5yN00yqVnmBmX')

const Pay = () => {
    const {orderId} = useParams();
    const [orderPay, setOrderPay]= useState({});

    useEffect(() => {
fetch(`http://localhost:5000/ordersId/${orderId}`)
.then(res=>res.json())
.then(data=> setOrderPay(data))
    }, [orderId])

    return (
        <Container>
            <Col style={{ marginLeft: "20px"}}>
                <h2 style={{ paddingTop: "20px", fontSize: "30px", fontWeight: "bold", }}>Payment For: {orderPay.productName}</h2>
                <p>Pay: ${orderPay.price}</p>
                <Elements stripe={stripePromise}>
                <CheckoutForm />
                </Elements>
            </Col>
            <Col>
                <img className="mt-5" src={paymentImage} alt="" />
            </Col>
        </Container>
    );
};

export default Pay;