import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <div className="container">

            <div className="row justify-content-center">
                <h3>What Our Client Says</h3>
                <p style={{ color: "#f0b916" }}>Customer Reviews</p>
                {
                    reviews.map(review => <Review
                        review={review}
                        key={review.name}
                    ></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;