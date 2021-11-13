import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const ExploreSingle = (props) => {
    const { name, description, price, img } = props.explore;
    return (
        <div className="col-md-3 service justify-content-center">

            <Card style={{ width: '18rem' }} className="fullcard" >
                <Card.Img className="card-img" variant="top" src={img} />
                <Card.Body className="bg-light text-black rounded-bottom text-start cardbody">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span id="description">
                            <small>{description}</small></span><br />
                        <p style={{ marginTop: "5px" }}><b>${price} / Each</b></p><br />
                        <NavLink to="/purchase" className="detailsLink">
                            <button className="violet-button">Buy Now</button>
                        </NavLink>
                    </Card.Text>
                </Card.Body>

            </Card>

        </div>
    );
};

export default ExploreSingle;