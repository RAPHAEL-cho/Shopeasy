import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <h3 className="mb-0 text-primary">ShopEasy</h3>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="px-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop" className="px-3">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="px-3">
              Cart
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className="px-3">
              <NavDropdown.Item as={Link} to="/about">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Account */}
          <Nav>
            <Nav.Link as={Link} to="/login" className="px-2">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="px-2 btn btn-primary text-primary">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;