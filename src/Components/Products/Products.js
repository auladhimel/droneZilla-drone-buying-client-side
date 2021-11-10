import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const products = [
        {
            name: 'Drone one',
            description: 'This is very Popular Drone',
            price: 100,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        },
        {
            name: 'Drone one',
            description: 'This is very Popular Drone',
            price: 100,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        },
        {
            name: 'Drone one',
            description: 'This is very Popular Drone',
            price: 100,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        },
        {
            name: 'Drone one',
            description: 'This is very Popular Drone',
            price: 100,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        },
        {
            name: 'Drone one',
            description: 'This is very Popular Drone',
            price: 100,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        },
        {
            name: 'Drone one',
            description: 'This is very Popular Drone',
            price: 100,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        },
        {
            name: 'Drone one',
            description: 'This is very Popular Drone',
            price: 100,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        },
        {
            name: 'Drone one',
            description: 'This is very Popular Drone',
            price: 100,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        }
    ]
    return (
        <div className="container">

            <div className="row justify-content-center">
                <h3>Our Popular Destinations</h3>
                {
                    products.slice(0, 6).map(product => <Product
                        product={product}
                        key={product.name}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;