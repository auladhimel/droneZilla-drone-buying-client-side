import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
// products component 
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://young-badlands-33283.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center pt-5">
                <h3>Most Trending Drones</h3>
                <p style={{ color: "#f0b916" }}>Get Your One</p>
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