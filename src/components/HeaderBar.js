import * as React from 'react';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function HeaderBar() {

    return (
        <Navbar
            className='justify-content-start'
            position="static"
            style={{
                height: '40px',
                backgroundColor: '#ffffff',
                color: 'black',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            }}
        >

            <Container style={{ marginLeft: '20px'}}>

                <Navbar.Brand href="#home">Some Company Consulting</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        <NavDropdown title="Products" id="basic-nav-dropdown-products">

                            <NavDropdown.Item
                                href="#Product 1"
                            >
                                Product 1
                            
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                href="#Product 2"
                            >
                                Product 2
                            
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                href="#Product 3"
                            >
                                Product 3
                            
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item
                                href="#Product 4"
                            >
                                Product after divider
                                
                            </NavDropdown.Item>
                        
                        </NavDropdown>

                        <NavDropdown title="Services" id="basic-nav-dropdown-services">

                            <NavDropdown.Item
                                href="#Service 1"
                            >
                                Service 1

                            </NavDropdown.Item>

                        </NavDropdown>

                        <Nav.Link href="#link">Contact Us</Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}