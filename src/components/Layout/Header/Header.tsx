import React from 'react';
import logo from './logo.svg';
import './Header.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import oorah_main_logo from "../../../assets/oorah-logo.png"

function Header() {
  return (
    <div className="Header">
          <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                  <Navbar.Brand as={Link} to= "/home"><img className="img" src={oorah_main_logo} ></img></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link as={Link} to= "/home">Home</Nav.Link>
                          <Nav.Link href="#link">Link</Nav.Link>
                          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">
                                  Another action
                              </NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item href="#action/3.4">
                                  Separated link
                              </NavDropdown.Item>
                          </NavDropdown>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
    </div>
  );
}

export default Header;
