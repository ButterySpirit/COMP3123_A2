const express = require("express");
const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  searchEmployees,
} = require("../controllers/employeeController");

const router = express.Router();

// Employee CRUD Routes
router.post("/", createEmployee); // Create a new employee
router.get("/", getEmployees); // Get all employees
router.get("/search", searchEmployees); // Search employees (must be above `/:id`)
router.get("/:id", getEmployeeById); // Get an employee by ID
router.put("/:id", updateEmployee); // Update an employee by ID
router.delete("/:id", deleteEmployee); // Delete an employee by ID

module.exports = router;
