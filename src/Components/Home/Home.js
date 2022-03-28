import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Products from '../Products/Products';
import Reviews from './Reviews/Reviews';
import './Home.css';
// Home page 
const Home = () => {
    return (
        <div className="home">
            <div className="banner-div">
                <Banner></Banner>
            </div>
            <Products></Products>
            <Reviews></Reviews>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;