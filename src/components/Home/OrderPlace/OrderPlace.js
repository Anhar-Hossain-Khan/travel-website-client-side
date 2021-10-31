import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './OrderPlace.css'

const OrderPlace = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://desolate-spire-46689.herokuapp.com/orderplace', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Information Added Successfully');
                reset();
            }
        })
    }
    return (
        <div>
            <h1 className="text-success">Add Your Information</h1>
            <form className="order-place" onSubmit={handleSubmit(onSubmit)}>
     
      <input {...register("name")} defaultValue={user.displayName} placeholder="Name" />
      <input {...register("email", { required: true })} placeholder="Email"  />
      {errors.email && <span className="error">This field is required</span>}
      <input {...register("address")} placeholder="Address" />
      <input {...register("city")} placeholder="City" />
      <input type="date"{...register("date", {valueAsDate: true,})}/>
      <input {...register("phone")} placeholder="Phone" />
      <input type="submit" className="btn btn-primary" />
    </form>
        </div>
    );
};

export default OrderPlace;