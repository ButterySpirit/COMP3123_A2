import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navigation = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Employee Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/employees">
                  Employees
                </Nav.Link>
                <Nav.Link onClick={handleLogout} style={{ cursor: "pointer" }}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
