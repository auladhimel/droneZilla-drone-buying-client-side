import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2 style={{ paddingTop: "10px", marginBottom: "20px", fontSize: "25px", fontWeight: "bold" }}>My Orders : {orders.length}</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Drone Model</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Quantity</th>

                    </tr>
                </thead>
                <tbody>
                    {orders.map((row) => (
                        <tr
                            key={row._id}
                        >
                            <td>{row.customerName}</td>
                            <td>{row.product}</td>
                            <td>{row.email}</td>
                            <td>{row.phone}</td>
                            <td>{row.address}</td>
                            <td>{row.quantity}</td>
                        </tr>

                    ))}

                </tbody>
            </Table>
        </div>
    );
};

export default Orders;