import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';
// product page 
const Product = (props) => {
    const { productName, description, price, image } = props.product;

    return (
        <div className="col-md-3 service justify-content-center">
            <Card style={{ width: '18rem' }} className="fullcard" >
                <Card.Img className="card-img" variant="top" src={image} />
                <Card.Body className="bg-light text-black rounded-bottom text-start cardbody text-center">
                    <Card.Title style={{ fontWeight: "bold" }}>{productName}</Card.Title>
                    <Card.Text>
                        <span id="description">
                            <small>{description}</small></span><br />
                        <p className="mt-3"><b>Price - ${price} / Each</b></p><br />
                        <Link to="/purchase" className="detailsLink">
                            <button className="violet-button">Buy Now</button>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;