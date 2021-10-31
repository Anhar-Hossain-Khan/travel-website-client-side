import React, { useEffect, useState } from 'react';
import { Row, Table  } from 'react-bootstrap';

const MyOrders = () => {
    const [myOrders, setmyOrders] = useState([])

    useEffect(()=>{
        fetch('https://desolate-spire-46689.herokuapp.com/orderplace')
        .then(response => response.json())
        .then(data => setmyOrders(data))
    }, [])

     // Delete an user

     const handleDeleteUser = id =>{
        const proceed = window.confirm('Are you sure, you want to Cancel?');
        if(proceed){
            const url = `https://desolate-spire-46689.herokuapp.com/orderplace/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('Cancel Successfully');
                const remainingMyOrders = myOrders.filter(myOrder => myOrder._id !== id)
                setmyOrders(remainingMyOrders);
            }
        })
        } 
    }

    return (
        <div className="container">
        <div className="top">
        <h2>My <span>Orders</span></h2>
        </div>
        <Row xs={1} md={1} lg={1} className="g-4">
           <ol>
           {
                myOrders?.map(myOrder => <li key={myOrder._id}>
  <div className="mt-5">
  <Table striped bordered hover className="text-primary" responsive="sm md lg">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>City</th>
      <th>Phone</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{myOrder.name}</td>
      <td>{myOrder.email}</td>
      <td>{myOrder.address}</td>
      <td>{myOrder.city}</td>
      <td>{myOrder.phone}</td>
      <td> <button onClick={()=> handleDeleteUser(myOrder._id)}  className=" text-white btn btn-success">Cancel</button> </td>
    </tr>
    
  </tbody>
  </Table>
        </div>
                </li>)
            }
           </ol>
        </Row>
     </div>

    );
};

export default MyOrders;