import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Review.css';

const Review = (props) => {
    const { name, email, review, ratings, image } = props.review;

    return (
        <div className="col-md-3 service justify-content-center">

            <Card style={{ width: '18rem' }} className="fullcard" >
                <Card.Img className="card-img reviewer pt-3" variant="top" src={image} />
                <Card.Body className="bg-light text-black rounded-bottom text-start cardbody text-center">
                    <Card.Title style={{ fontWeight: "bold" }}>Ratings-{ratings}</Card.Title>
                    <Card.Text>
                        <span id="description">
                            <small>{email}</small></span><br />
                        <p>{review}</p>
                        <p className="mt-2"><b>{name}</b></p><br />
                    </Card.Text>
                </Card.Body>

            </Card>

        </div>
    );
};

export default Review;