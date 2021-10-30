import React from 'react';
import { Table} from 'react-bootstrap';

const MyOrder = (props) => {
    const { name, email, address, city, phone} = props.myOrder;
    return (
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
      <td>{name}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{city}</td>
      <td>{phone}</td>
      <td> <button className=" text-white btn btn-success">Cancel</button> </td>
    </tr>
    
  </tbody>
</Table>
        </div>
    );
};

export default MyOrder;