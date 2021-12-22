import React from 'react';
import {Link}  from 'react-router-dom';
import  Navbar from 'react-bootstrap/Navbar';
import { Nav} from 'react-bootstrap';
import { Container} from 'react-bootstrap';


function Header () {
    return (
<div className='nav-bar'>
{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container className="nav-bar">
  <Link to ='/'><h1>Ideas</h1></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Link to ='/'><h2>LogIn</h2></Link >
        <Link to ='/register'><h2>Register</h2></Link >
        <Link to ='/profile'><h2>Profile</h2></Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> */}
<Navbar fixed="bottom"bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#"><h1>Ideas</h1></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">LogIn</Nav.Link>
      <Nav.Link href="#sign-up">SignUp</Nav.Link>
      <Nav.Link href="#profile">Profile</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</div>
)
}


export default Header