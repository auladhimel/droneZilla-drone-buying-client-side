import React, { useEffect, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Purchase.css';

// purchase component 
const Purchase = () => { 

    const { productId }= useParams();
    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '', status:'Pending' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const [orderSuccess, setOrderSuccess]= useState(false);
    // const handlePurchasingSubmit = e => {
    //     console.log(orderInfo);
    //     fetch(`https://young-badlands-33283.herokuapp.com/orders/${productId}`,{
    //         method: "POST",
    //         headers: { 
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(orderInfo),
    //     })
        
    //     .then((res) => res.json())
    //     .then(data => {
    //         if (data.insertedId) {
    //             alert('order placed');
    //             e.target.reset();
    //         }
    //     })
    
    //   }


    // const handlePurchasingSubmit = e => {
    //     //collect data
    //     const order = { ...orderInfo }
    //     //send data to server
    //     fetch('https://young-badlands-33283.herokuapp.com/orders', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(order)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (user.insertedId) {
    //                 alert('order placed');
    //             }
    //         })
    //     e.preventDefault();
    //     alert('order placed');
    // }

    useEffect(()=>{
        fetch(`https://young-badlands-33283.herokuapp.com/singlePurchase/${productId}`)
        .then(res=>res.json())
        // .then(data=>setSingleBooking(data))
        .then(data=>setOrderInfo(data))
        
    },[])


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);

    }


    const onSubmit=e=>{
        const order={
            ...orderInfo,
            customerName: user.displayName, 
            email: user.email, 
            phone: '',
            address:'', 
            status:'Pending',
          
        }
        delete order._id;
        console.log(order);
        fetch('https://young-badlands-33283.herokuapp.com/orders',{
            method: 'POST',
            headers:{ 
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){  
                alert('Order Placed Successfully');

            }
        })
    }

    return (
        <div className="updateProduct">
        <h2>Make Order</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
  {/* register your input into the hook by invoking the "register" function */}
  <label style={{ paddingRight:"75px"}}>Name : </label>
  <input style={{ marginBottom:"20px"}} defaultValue={user.displayName}  {...register("status")}/> <br />

  <label style={{ paddingRight:"75px"}}>Email : </label>
  <input style={{ marginBottom:"20px"}} defaultValue={user.email}  {...register("email")}/> <br />

  <label style={{ paddingRight:"75px"}}>Phone : </label>
  <input style={{ marginBottom:"20px"}} placeholder="Phone"  {...register("phone")}/> <br />

  <label style={{ paddingRight:"50px"}}>Address : </label>
  <input style={{ marginBottom:"20px"}} placeholder="Address" {...register("address")}/> <br />

  <label style={{ paddingRight:"10px"}}>Product Name : </label>
  <input style={{ marginBottom:"20px"}} name="firstName" defaultValue={orderInfo.productName} {...register("productName")} /> <br />

  <label style={{ paddingRight:"75px"}}>Price : </label>
  <input style={{ marginBottom:"20px"}} defaultValue={orderInfo.price}  {...register("price")}/> <br />
  
  
  {/* errors will return when field validation fails  */}
  {errors.exampleRequired && <span>This field is required</span>}
  
  <input style={{ marginLeft:"90px"}} variant="warning" className="submit" type="submit"/>
</form>

{/* {orderSuccess && <alert>Order Placed Successfully!</alert>} */}
    </div>
        // <div className="purchase">
        //     <h1 style={{ paddingTop: "20px", marginBottom: "30px", fontSize: "28px", fontWeight: "bold" }}>Purchase</h1>
        //     <Form onSubmit={handleOrderSubmit}>
        //         <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
        //             <Form.Control type="text" onBlur={handleOnBlur} name="customerName" placeholder="Your Name" value={user.displayName} />
        //         </Form.Group>
        //         <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3">
        //             <Form.Control type="email" onBlur={handleOnBlur} placeholder="Your Email" value={user.email} />
        //         </Form.Group>
        //         <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3" >
        //             <Form.Control type="number" onBlur={handleOnBlur} name="phone" placeholder="Phone Number" />
        //         </Form.Group>
        //         <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3" >
        //             <Form.Control type="text" onBlur={handleOnBlur} name="address" placeholder="Address" />
        //         </Form.Group>
        //         <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3" >
        //             <Form.Control type="text" onBlur={handleOnBlur} name="product" value={orderInfo.productName} placeholder="Product" />
        //         </Form.Group>
        //         <Form.Group style={{ width: '30%', margin: 'auto' }} className="mb-3" >
        //             <Form.Control type="number" onBlur={handleOnBlur} name="price" value={orderInfo.price} placeholder="Price" />
        //         </Form.Group>
        //         <Button variant="warning" type="submit">
        //             Place Order
        //         </Button>
        //     </Form>
        // </div >
    );
};

export default Purchase;