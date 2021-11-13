import React, { useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const products = [
        {
            name: 'Skydio 2',
            description: 'Camera resolution: 30MP, 4k Ultra HD || Flight time:34 minutes(Per battery) || Notable Attributes: Altitude Hold, Headless Mode, Full Trim, and Real-Time WiFi FPV',
            price: 949,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        },
        {
            name: 'DJI Mavic Air 2',
            description: 'Camera resolution: 12MP, 4k Ultra HD || Flight time:12-15 minutes(Per battery) || Notable Attributes: Altitude Hold, Headless Mode, Full Trim, and Real-Time WiFi FPV',
            price: 849,
            img: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmUlMjBjYW1lcmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80g'
        },
        {
            name: 'Autel EVO',
            description: 'Camera resolution: 48MP, 4k Ultra HD || Flight time:12-15 minutes(Per battery) || Notable Attributes: Altitude Hold, Headless Mode, Full Trim, and Real-Time WiFi FPV',
            price: 373,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        },
        {
            name: 'DJI Phantom 4',
            description: 'Camera resolution: 20MP, 4k Ultra HD || Flight time:12-15 minutes(Per battery) || Notable Attributes: Altitude Hold, Headless Mode, Full Trim, and Real-Time WiFi FPV',
            price: 959,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        },
        {
            name: 'DJI FPV Drone',
            description: 'Camera resolution: 12MP, 4k Ultra HD || Flight time:12-15 minutes(Per battery) || Notable Attributes: Altitude Hold, Headless Mode, Full Trim, and Real-Time WiFi FPV',
            price: 599,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        },
        {
            name: 'Holy Stone HS270',
            description: 'Camera resolution: 2.7k Ultra HD || Flight time:18 minutes(Per battery) || Notable Attributes: Altitude Hold, Headless Mode, Full Trim, and Real-Time WiFi FPV',
            price: 449,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        },
        {
            name: 'DJI Mavic 2 Zoom',
            description: 'Camera resolution: 12MP, 4k Ultra HD || Flight time:12-15 minutes(Per battery) || Notable Attributes: Altitude Hold, Headless Mode, Full Trim, and Real-Time WiFi FPV',
            price: 696,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        },
        {
            name: 'U49WF FPV CAmera Drone',
            description: 'Camera resolution: 720p HD || Flight time:12-15 minutes(Per battery) || Notable Attributes: Altitude Hold, Headless Mode, Full Trim, and Real-Time WiFi FPV',
            price: 704,
            img: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2013/12/drone1.jpg'
        }
    ]
    return (
        <div className="container">

            <div className="row justify-content-center">
                <h3>Most Trending Drones</h3>
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