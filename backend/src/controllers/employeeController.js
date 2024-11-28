const Employee = require("../models/Employee");

// Create an Employee
exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an Employee
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an Employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Search Employees by Department or Position
exports.searchEmployees = async (req, res) => {
  try {
    const { query } = req.query;

    // Validate query parameter
    if (!query) {
      return res.status(400).json({ message: "Query parameter is missing" });
    }

    // Search employees by department or position (case-insensitive)
    const employees = await Employee.find({
      $or: [
        { department: { $regex: query, $options: "i" } },
        { position: { $regex: query, $options: "i" } },
      ],
    });

    if (employees.length === 0) {
      return res.status(404).json({ message: "No employees found for the given query" });
    }

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
