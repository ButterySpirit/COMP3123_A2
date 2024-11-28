import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/employees", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployees(response.data);
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployees(employees.filter((emp) => emp._id !== id));
      alert("Employee deleted successfully!");
    } catch (error) {
      console.error("Error deleting employee:", error.response.data);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Employees List</h2>
      <Link to="/employees/add" className="btn btn-primary mb-3">
        Add Employee
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.position}</td>
              <td>${emp.salary}</td>
              <td>
                <Link to={`/employees/edit/${emp._id}`} className="btn btn-warning btn-sm me-2">
                  Update
                </Link>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(emp._id)}
                  className="me-2"
                >
                  Delete
                </Button>
                <Link to={`/employees/${emp._id}`} className="btn btn-info btn-sm">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default EmployeeList;
