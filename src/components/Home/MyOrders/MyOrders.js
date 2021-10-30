import React, { useEffect, useState } from 'react';
import { Row  } from 'react-bootstrap';
import MyOrder from '../MyOrder/MyOrder';


const MyOrders = () => {
    const [myOrders, setmyOrders] = useState([])

    useEffect(()=>{
        fetch('https://desolate-spire-46689.herokuapp.com/orderplace')
        .then(response => response.json())
        .then(data => setmyOrders(data))
    }, [])

    return (
        <div className="container">
        <div className="top">
        <h2>My <span>Orders</span></h2>
        </div>
        <Row xs={1} md={1} lg={1} className="g-4">
            {
                myOrders?.map(myOrder => <MyOrder key={myOrder._id} myOrder={myOrder}></MyOrder>)
            }
        </Row>
     </div>

    );
};

export default MyOrders;