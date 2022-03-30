import React, { useRef, useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import imageAddProducts from '../../../images/image-8.jpeg';


const AddProducts = () => {

    const productNameRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();
    const priceRef = useRef();

    // const [productInfo, setProductInfo] = useState({});

    const handleAddProductSubmit = e => {
        //collect data
        const productName = productNameRef.current.value;
        const description = descriptionRef.current.value;
        const image = imageRef.current.value;
        const price = priceRef.current.value;
        const products = {
            productName,
            description,
            image,
            price
        }
        //send data to server
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();
        // e.preventDefault();
        // alert('order placed');
    }





    return (
        <Container className="d-flex pt-5">
            <Col>
                {/* Add product form  */}
                <h2 className="ps-5" style={{ paddingTop: "70px", paddingBottom: "25px", fontSize: "25px", fontWeight: "bold" }}>Add Products</h2>
                <Form className="ps-5" style={{ width: "75%", margin: "auto" }} onSubmit={handleAddProductSubmit}>
                    <Form.Group style={{ width: '100%', margin: 'auto' }} className="mb-3 ps-5">
                        <Form.Control type="text" ref={productNameRef} name="productName" placeholder="Product Name" />
                    </Form.Group>
                    <Form.Group style={{ width: '100%', margin: 'auto' }} className="mb-3 ps-5">
                        <Form.Control type="text" ref={descriptionRef} name="description" placeholder="Product Description" />
                    </Form.Group>
                    <Form.Group style={{ width: '100%', margin: 'auto' }} className="mb-3 ps-5">
                        <Form.Control type="text" ref={imageRef} name="image" placeholder="Image url" />
                    </Form.Group>
                    <Form.Group style={{ width: '100%', margin: 'auto' }} className="mb-3 ps-5">
                        <Form.Control type="number" ref={priceRef} name="price" placeholder="price" />
                    </Form.Group>
                    <Button className="ms-5 px-5" variant="warning" type="submit">Submit</Button>

                </Form></Col>
            <Col>
                <img className="w-100" src={imageAddProducts} alt="" />
            </Col>
        </Container>
    );
};

export default AddProducts;