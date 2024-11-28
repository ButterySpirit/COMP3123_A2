import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`http://localhost:5000/api/employees/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee details:", error.response.data);
      }
    };
    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <Container className="mt-4">Loading employee details...</Container>;
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header className="bg-primary text-white">Employee Details</Card.Header>
        <Card.Body>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Position:</strong> {employee.position}</p>
          <p><strong>Salary:</strong> ${employee.salary}</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EmployeeDetails;
