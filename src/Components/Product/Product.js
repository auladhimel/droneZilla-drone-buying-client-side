import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { name, description, price, img, setOrderSucess } = props.product;

    return (
        <div className="col-md-3 service justify-content-center">

            <Card style={{ width: '18rem' }} className="fullcard" >
                <Card.Img className="card-img" variant="top" src={img} />
                <Card.Body className="bg-light text-black rounded-bottom text-start cardbody">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span id="description">
                            <small>{description}</small></span><br />
                        <p><b>${price} / Per person</b></p><br />
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