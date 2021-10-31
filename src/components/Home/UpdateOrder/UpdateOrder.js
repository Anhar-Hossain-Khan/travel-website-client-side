import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateOrder = () => {
    const [orderStatus, setOrderStatus] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        const url = `https://desolate-spire-46689.herokuapp.com/orderplace/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrderStatus(data))
    }, [])

    const handleStatusChange = event =>{
     const updatedStatus = event.target.value;
     const updatedOrder = { 
         name: orderStatus.name,
         email: orderStatus.email,
         address: orderStatus.address,
         city: orderStatus.city,
         date: orderStatus.date,
         phone: orderStatus.phone,
         status: updatedStatus, 
        };
     setOrderStatus(updatedOrder);
    }

    const handleUpdateOrder = event =>{
        const url = `https://desolate-spire-46689.herokuapp.com/orderplace/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderStatus)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Updated Successfully')
                setOrderStatus({});
                event.target.reset();
            }
        })

        event.preventDefault();
    }
    return (
        <div>
        <h2 style={{ textAlign: "center" }}>Update Status</h2>
    
       <form onSubmit={handleUpdateOrder}>
       <input type="text" onChange={handleStatusChange} value={orderStatus. status || ''} />
         <input  type="submit" value="Update" className="btn btn-danger" />
       </form>
    </div>
    );
};

export default UpdateOrder;