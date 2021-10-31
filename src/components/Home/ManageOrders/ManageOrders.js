import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [manageAllOrders, setManageAllOrders] = useState([]);

  useEffect(() => {
    fetch('https://desolate-spire-46689.herokuapp.com/orderplace')
      .then((res) => res.json())
      .then((data) => setManageAllOrders(data));
  }, []);

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
            alert('Deleted Successfully');
            const remainingMyOrders = manageAllOrders.filter(manageAllOrder => manageAllOrder._id !== id)
            setManageAllOrders(remainingMyOrders);
        }
    })
    } 
}
    return (
            
            <div className="container mt-5">
                <h1>Manage All Orders: {manageAllOrders?.length}</h1>
  
                <Row xs={1} md={1} lg={1}>
  <Table striped bordered hover className="text-primary" responsive="sm md lg">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Date</th>
      <th>Approve</th>
      <th>Status</th>
      <th>Delete</th>
     
    </tr>
  </thead>
  {manageAllOrders?.map((manageAllOrder, index) => (
  <tbody>
    <tr>
    

      <td>{index}</td>
      <td>{manageAllOrder.name}</td>
      <td>{manageAllOrder.email}</td>
      <td>{manageAllOrder.address}</td>
      <td>{manageAllOrder.date}</td>
      <td> <button  className=" text-white btn btn-success">Approve</button> </td>
      <td>Pending</td>
      <td> <button onClick={()=> handleDeleteUser(manageAllOrder._id)} className=" text-white btn btn-danger">Delete</button> </td>
    </tr>
    
  </tbody>
  ))}
  </Table>
  </Row>
 
  
        </div>
              
            
           
        
    );
};

export default ManageOrders;