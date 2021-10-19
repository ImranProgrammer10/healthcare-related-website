import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faCoffee } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/images/logo1.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { AllContexts } = useAuth();
    const { user, logOut } = AllContexts;
    const { displayName, photoURL, email } = user;
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/service">Service</Nav.Link>
                            <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>

                            <Nav.Link as={NavLink} to="#link"> <FontAwesomeIcon style={{ fontSize: "15px" }} icon={faCalendarCheck} />
                                <Badge className="badge" >0</Badge></Nav.Link>

                            {!displayName ? (<> <Nav.Link as={NavLink} to="/signup">Sign up</Nav.Link>
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link></>) : (
                                <NavDropdown title={<img style={{ width: "45px", borderRadius: "50%" }} src={photoURL} alt="" />}  >
                                    <div className="text-center">
                                        <h6>{displayName}</h6>
                                        <p className="mb-2">{email}</p>
                                        <button onClick={logOut} className="btn btn-primary">Sign Out</button>
                                    </div>
                                </NavDropdown>
                            )}






                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;