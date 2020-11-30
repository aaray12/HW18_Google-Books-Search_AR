import React from "react";
import { Navbar,Nav,NavDropdown} from 'react-bootstrap'
function MyNavbar() {
    return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Google Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Search</Nav.Link>
            <Nav.Link href="/savedbooks">Saved</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
  }
  
  export default MyNavbar;
  