import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
    const [gallery, setGallery] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, []);
    return (
        <div className="row text-center justify-content-center">
            <h1> <span className="gallery">Gallery</span></h1>
            {
                gallery.map((galleries, index) => (
                    <div className="col-md-3 service justify-content-center">

                        <Card style={{ width: '20rem' }} className="fullcard" >
                            <Card.Img className="card-img" variant="top" src={galleries?.image} />
                        </Card>

                    </div>
                ))
            }
        </div >
    );
};

export default Gallery;