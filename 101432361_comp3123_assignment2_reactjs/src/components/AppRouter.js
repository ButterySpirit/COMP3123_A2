import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import EmployeeList from "./Employee/EmployeeList";
import EmployeeForm from "./Employee/EmployeeForm";
import EmployeeDetails from "./Employee/EmployeeDetails";
import EmployeeSearch from "./Employee/EmployeeSearch"; // Import EmployeeSearch
import Navbar from "./Layout/Navbar"; // Import Navbar

const AppRouter = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar appears on all pages */}
      <Routes>
        {/* Dashboard as the default home page */}
        <Route path="/" element={<Dashboard />} /> {/* Dashboard as Home Page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/add" element={<EmployeeForm />} />
        <Route path="/employees/edit/:id" element={<EmployeeForm />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="/search" element={<EmployeeSearch />} /> {/* EmployeeSearch Route */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
