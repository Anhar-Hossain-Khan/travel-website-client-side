import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar bg="info" className="p-3 header" sticky="top" collapseOnSelect expand="lg">
         <Container>
         <Navbar.Brand href="#home" className="fw-bold text-warning">TravelBD</Navbar.Brand>
         <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end fw-bold">
         <Nav.Link  as={Link} to="/home" className="text-info">Home</Nav.Link>
         <Nav.Link  as={Link} to="/addService"className="text-info">Add Service</Nav.Link>
         <Nav.Link  as={Link} to="/myOrders" className="text-info">My Orders</Nav.Link>
         <Nav.Link  as={Link} to="/manageOrders" className="text-info">Manage Orders</Nav.Link>
         <Nav.Link as={Link} to="/login" className="text-white">Sign In</Nav.Link>
        
         </Navbar.Collapse>
         </Container>
         </Navbar>
        </>
    );
};

export default Header;