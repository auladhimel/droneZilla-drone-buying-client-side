import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash , faEdit} from '@fortawesome/free-solid-svg-icons';

// explore page 
const ManageProducts = () => {

    const elementTrash = <FontAwesomeIcon icon={faTrash} />
    const elementEdit = <FontAwesomeIcon icon={faEdit} />

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://young-badlands-33283.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])


    // Delete Products
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure! You want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }

    }

    return (
        <div>
            {/* orders table  */}
            <h2 style={{ paddingTop: "10px", marginBottom: "20px", fontSize: "25px", fontWeight: "bold" }}>All Products : {products.length}</h2>
            <Table striped bordered hover size="sm" style={{marginLeft:"80px"}}>
                <thead>
                    <tr>
                        <th>Model Name</th>
                        <th>Description</th>
                        <th>Price</th>                  
                        <th>Action</th>                  
                    </tr>
                </thead>
                <tbody>
                {products.map((row) => (
                        <tr
                            key={row._id}
                        >
                            <td>{row.productName}</td>
                            <td>{row.description.slice(0,40)}</td>
                            <td>{row.price}</td>
                            <td>
                                <Link to={`/update/${row._id}`}><button className="btn-outline-success rounded border-0 me-1">{elementEdit}</button></Link>
                            <button className="btn-outline-danger rounded border-0" onClick={() => handleDeleteProduct(row._id)}>{elementTrash}</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;