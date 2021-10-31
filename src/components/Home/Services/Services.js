import React, { useEffect, useState } from 'react';
import './Services.css'
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('https://desolate-spire-46689.herokuapp.com/services')
        .then(response => response.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="container">
        <div className="top">
        <h2>Our Popular <span>Packages</span></h2>
        </div>
        <input className="package" type="text" placeholder="Search your Favourite Packages" />
        <Row xs={1} md={2} lg={3} className="g-4">
            {
                services?.map(service => <Service key={service._id} service={service}></Service>)
            }
        </Row>
     </div>
    );
};

export default Services;