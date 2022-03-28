import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// explore page 
const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div>
            {/* orders table  */}
            <h2 style={{ paddingTop: "10px", marginBottom: "20px", fontSize: "25px", fontWeight: "bold" }}>My Orders : {products.length}</h2>
            <Table striped bordered hover size="sm">
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
                                <Link to={`/update/${row._id}`}><button className="btn-success mb-1">Update</button></Link>
                            <button className="btn-danger" onClick="{() => handleDeleteOrder(row._id)}">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;