import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Purchase.css';
// purchase component 
const Purchase = () => {
    const { user } = useAuth();

    const initialInfo = { customerName: user.displayName, email: user.email, phone: '', status:'Pending' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);


    const handlePurchasingSubmit = e => {
        //collect data
        const order = { ...orderInfo }
        //send data to server
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (user.insertedId) {
                    alert('order placed');
                }
            })
        e.preventDefault();
        alert('order placed');
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);

    }
    const handleSuccessAlert = e => {
        alert('success');
        e.preventDefault();
    }
    return (
        <div className="purchase">
            <h1 style={{ paddingTop: "20px", marginBottom: "30px", fontSize: "28px", fontWeight: "bold" }}>Purchase</h1>
            <Form onSubmit={handlePurchasingSubmit}>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
                    <Form.Control type="text" name="customerName" placeholder="Your Name" value={user.displayName} />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
                    <Form.Control type="email" placeholder="Your Email" value={user.email} />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3" >
                    <Form.Control type="number" onBlur={handleOnBlur} name="phone" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3" >
                    <Form.Control type="text" onBlur={handleOnBlur} name="address" placeholder="Address" />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3" >
                    <Form.Control type="text" onBlur={handleOnBlur} name="product" placeholder="Product" />
                </Form.Group>
                <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3" >
                    <Form.Control type="number" onBlur={handleOnBlur} name="quantity" placeholder="Quantity" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Place Order
                </Button>
            </Form>
        </div >
    );
};

export default Purchase;