import React, { useEffect, useState } from 'react';
import './Services.css'
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(response => response.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="container">
        <div className="top">
        <h2>Our <span>Services</span></h2>
        </div>
        <input className="service" type="text" placeholder="Search your Favourite Places" />
        <Row xs={1} md={2} lg={3} className="g-4">
            {
                services?.map(service => <Service key={service._id} service={service}></Service>)
            }
        </Row>
     </div>
    );
};

export default Services;