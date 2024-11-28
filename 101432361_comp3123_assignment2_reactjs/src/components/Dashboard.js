import React, { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Employee Manager Dashboard</h2>
      <Row className="g-4">
        <Col md={6} lg={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total Employees</Card.Title>
              <Card.Text>
                Manage all employee records, including adding, editing, and
                deleting employees.
              </Card.Text>
              <Button as={Link} to="/employees" variant="primary">
                Go to Employees
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Search Employees</Card.Title>
              <Card.Text>
                Quickly find employees by department or position.
              </Card.Text>
              <Button as={Link} to="/search" variant="success">
                Search Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          {isAuthenticated ? (
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Logout</Card.Title>
                <Card.Text>
                  Securely log out of your account and return to the login page.
                </Card.Text>
                <Button as={Link} to="/login" variant="danger">
                  Logout
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Sign Up</Card.Title>
                <Card.Text>
                  Create an account to start managing your employees today.
                </Card.Text>
                <Button as={Link} to="/signup" variant="info">
                  Sign Up
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
