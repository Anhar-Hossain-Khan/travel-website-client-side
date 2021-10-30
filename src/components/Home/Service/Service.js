import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {_id, img, name, price, description} = props.service;
    return (
        <div className="mt-5">
        <Col>
        <Card>
          <Card.Img variant="top" className="card-img border border-primary rounded-3" src={img} />
          <Card.Body>
             <h3>{name}</h3>
             <h5>${price}</h5>
             <p>{description.slice(0, 110)}</p>
            <Link to={`/bookNow/${_id}`}>
             <Button variant="danger">Book Now</Button>
           </Link>
          </Card.Body>
        </Card>
      </Col>
        </div>
    );
};

export default Service;