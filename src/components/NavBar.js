import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OIP from "../assets/OIP.jpg"
import Button from 'react-bootstrap/Button';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-white ">
            <Container>
                <Navbar.Brand className=" d-flex justify-content-center align-items-center" href="#home">
                    <img style={{ width: "4rem" }}
                        src={OIP}
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    <h1 className='fs-2 fw-bold'>growth.cx</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav "  >
                    <Nav className='ms-auto ' >
                        <Nav.Link style={{ color: "black" }} className="pe-4" href='About.js'>Why us</Nav.Link>
                        <Nav.Link style={{ color: "black" }} className="pe-4" href='About.js'>Our fixes</Nav.Link>
                        <Nav.Link style={{ color: "black" }} className="pe-4" href='About.js'>Growth</Nav.Link>
                        <Nav.Link style={{ color: "black" }} className="pe-4" href='About.js'>Eye-openers</Nav.Link>
                        <Nav.Link style={{ color: "black" }} className="pe-4 active" href='About.js' >Customers</Nav.Link>
                        <Button className='bg-dark me-5' size="sm" active>Hope on a call</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar
