import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import "./UpdateProducts.css";

const UpdateProducts = () => {
    const { productId } = useParams();
    const [singleProduct, setSingleProduct]= useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/update/${productId}`,{
        method: "PUT",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then(data => {
        if (data.modifiedCount) {
            alert('Product Updated Successfully');
        }
    })

  }
    useEffect(()=>{
        fetch(`http://localhost:5000/singleProduct/${productId}`)
        .then((res)=>res.json())
        .then((data)=>setSingleProduct(data));

    },[])


    return (
        <div className="updateProduct">
            <h2>Update Product's Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label style={{ paddingRight:"20px"}}>Model Name : </label>
      <input style={{ marginBottom:"20px"}} name="firstName" defaultValue={singleProduct.productName} {...register("productName")} /> <br />
      <label style={{ paddingRight:"75px"}}>Price : </label>
      <input style={{ marginBottom:"20px"}} defaultValue={singleProduct.price}  {...register("price")}/> <br />
      
      
      {/* include validation with required or other standard HTML validation rules */}
      <label style={{ paddingRight:"27px"}}>Description : </label>
      <input style={{ marginBottom:"20px"}} defaultValue={singleProduct.description} {...register("description", { required: true })} /> <br />
      
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input variant="warning" className="submit" type="submit"/>
    </form>
        </div>
    );
};

export default UpdateProducts;