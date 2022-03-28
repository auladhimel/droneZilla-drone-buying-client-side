import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
// ManageOrders page 
const ManageOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [status,setStatus]=useState("");

    const handleStatus=(e)=>{
    setStatus(e.target.value);
    };
    console.log(status);


    useEffect(() => {
        const url = `https://young-badlands-33283.herokuapp.com/allOrders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleUpdate=(id)=>{
        const proceed = window.confirm('Are you sure! You want to update status?');
        fetch(`https://young-badlands-33283.herokuapp.com/updateStatus/${id}`,{
            method:"PUT",
            headers:{"content-type": "application/json"},
            body: JSON.stringify({status}),
        })     
        alert('Updated Successfully');
 
    }
    // Delete Order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure! You want to delete?');
        if (proceed) {
            const url = `https://young-badlands-33283.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }

    }

    return (
        <div>
            {/* orders table  */}
            <h2 style={{ paddingTop: "10px", marginBottom: "20px", fontSize: "25px", fontWeight: "bold" }}>All Orders : {orders.length}</h2>
            <Table striped bordered hover size="sm" style={{ marginLeft: "80px"}}>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Drone Model</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Quantity</th>                        
                        <th>Status</th>                        
                        <th>Action</th>
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
                            <td style={{width:'30x'}}><input type="text" onChange={handleStatus} defaultValue={row.status} style={{width:'60%'}}></input>
                            </td>                          
                            <td><button onClick={()=>handleUpdate(row._id)} className="btn-success mb-1">Update</button> <button className="btn-danger" onClick={() => handleDeleteOrder(row._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;