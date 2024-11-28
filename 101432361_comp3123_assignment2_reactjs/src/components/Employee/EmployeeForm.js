import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    position: "",
    salary: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchEmployee = async () => {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:5000/api/employees/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEmployee(response.data);
      };
      fetchEmployee();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      if (id) {
        await axios.put(`http://localhost:5000/api/employees/${id}`, employee, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Employee updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/employees", employee, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Employee added successfully!");
      }
      navigate("/employees");
    } catch (error) {
      console.error("Error submitting form:", error.response.data);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">{id ? "Update Employee" : "Add Employee"}</h2>
      <Form onSubmit={handleSubmit} className="border p-4 rounded">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
            placeholder="Enter department"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={employee.position}
            onChange={handleChange}
            placeholder="Enter position"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            placeholder="Enter salary"
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button variant="success" type="submit">
            Save
          </Button>
          <Button variant="danger" onClick={() => navigate("/employees")}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EmployeeForm;
