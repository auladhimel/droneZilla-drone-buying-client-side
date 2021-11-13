import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Button, Col, Container, Form } from 'react-bootstrap';
import imageTwo from '../../../images/image-5.png';
import './AddReviews.css';

const AddReviews = () => {

    const { user } = useAuth();

    const emailRef = useRef();
    const nameRef = useRef();
    const ratingsRef = useRef();
    const reviewRef = useRef();

    const handleReviewSubmit = e => {
        //collect data
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const ratings = ratingsRef.current.value;
        const review = reviewRef.current.value;
        const reviews = {
            email,
            name,
            ratings,
            review
        }
        //send data to server
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Added Successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();
        // e.preventDefault();
        // alert('order placed');
    }
    return (
        <Container className="d-flex pt-5 px-5 ms-5">
            <Col className="addReview">
                <h2 style={{ paddingTop: "10px", marginBottom: "20px", fontSize: "25px", fontWeight: "bold" }}>Add Review</h2>
                <Form onSubmit={handleReviewSubmit}>

                    <Form.Group style={{ width: '70%', margin: 'auto' }} className="mb-3">
                        <Form.Control type="email" ref={emailRef} name="email" placeholder="Your Email" value={user.email} />
                    </Form.Group>
                    <Form.Group style={{ width: '70%', margin: 'auto' }} className="mb-3">
                        <Form.Control type="text" ref={nameRef} name="customerName" placeholder="Your Name" value={user.displayName} />
                    </Form.Group>
                    <Form.Group style={{ width: '70%', margin: 'auto' }} className="mb-3" >
                        <Form.Control type="number" ref={ratingsRef} name="addRatings" placeholder="Add Ratings" />
                    </Form.Group>
                    <Form.Group style={{ width: '70%', margin: 'auto' }} className="mb-3" >
                        <Form.Control className="pb-5" type="text" ref={reviewRef} name="reviewText" placeholder="Review Text" />
                    </Form.Group>
                    <Button className="px-5" variant="warning" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col >
            <Col className="reviewImage">
                <img src={imageTwo} alt="" />
            </Col>
        </Container>
    );
};

export default AddReviews;