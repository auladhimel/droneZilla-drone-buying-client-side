import React, { useEffect, useState } from 'react';
import ExploreSingle from '../ExploreSingle/ExploreSingle';
import Products from '../Products/Products';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://thawing-mesa-49246.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (

        <div className="container">

            <div className="row justify-content-center">
                <h3 style={{ paddingTop: "20px", fontSize: "25px", fontWeight: "bold" }}>Explore Our Trending Drones</h3>
                {
                    products.map(explore => <ExploreSingle
                        explore={explore}
                        key={explore.name}
                    ></ExploreSingle>)
                }
            </div>

        </div>

    );
};

export default Explore;