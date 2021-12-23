import React from 'react';
import {Link}  from 'react-router-dom';
import  Navbar from 'react-bootstrap/Navbar';
import { Nav} from 'react-bootstrap';
import { Container} from 'react-bootstrap';


function Header () {
    return (
<div className='nav-bar'>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container className="nav-bar">
  <Link to ='/'><h1>idea</h1></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Link to ='/register'><h3>Register</h3></Link >
        <Link to ='/profile'><h3>Profile</h3></Link >
        <Link to ='/main'><h3>Main</h3></Link >
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
)
}


export default Header