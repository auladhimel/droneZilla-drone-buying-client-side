import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import imageTwo from '../../../images/image-5.png';
import './AddReviews.css';

const AddReviews = () => {
    return (
        <Container className="d-flex pt-5 px-5 ms-5">
            <Col className="addReview">
                <h2 style={{ paddingTop: "10px", marginBottom: "20px", fontSize: "25px", fontWeight: "bold" }}>Add Review</h2>
                <Form>

                    <Form.Group style={{ width: '70%', margin: 'auto' }} className="mb-3">
                        <Form.Control type="email" name="email" placeholder="Your Email" />
                    </Form.Group>
                    <Form.Group style={{ width: '70%', margin: 'auto' }} className="mb-3">
                        <Form.Control type="text" name="customerName" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group style={{ width: '70%', margin: 'auto' }} className="mb-3" >
                        <Form.Control type="number" name="addRatings" placeholder="Add Ratings" />
                    </Form.Group>
                    <Form.Group style={{ width: '70%', margin: 'auto' }} className="mb-3" >
                        <Form.Control className="pb-5" type="text" name="reviewText" placeholder="Review Text" />
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