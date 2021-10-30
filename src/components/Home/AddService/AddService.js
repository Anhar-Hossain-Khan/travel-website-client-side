import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Services from '../Services/Services';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://desolate-spire-46689.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Service Added Successfully');
                reset();
            }
        })
    }
    return (
        <div className="add-service">
            <h1>This is add Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <input {...register("price")} placeholder="Price" />
      <textarea {...register("description")} placeholder="Description" />
      <input {...register("img")} placeholder="Img Url" />
      <input type="submit" />
    </form>

    <Services></Services>
        </div>
    );
};

export default AddService;