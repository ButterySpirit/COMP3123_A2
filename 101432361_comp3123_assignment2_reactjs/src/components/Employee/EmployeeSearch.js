import React, { useState } from "react";
import axios from "axios";

const EmployeeSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:5000/api/employees/search?query=${query}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setResults(response.data);
    } catch (error) {
      console.error("Search failed:", error.response.data);
      setResults([]); // Reset results if no matches
    }
  };

  return (
    <div className="container">
      <h2>Search Employees</h2>
      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <label>Search by Department or Position:</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {results.length > 0 && (
        <div className="mt-4">
          <h4>Search Results</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Position</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {results.map((emp) => (
                <tr key={emp._id}>
                  <td>{emp.name}</td>
                  <td>{emp.department}</td>
                  <td>{emp.position}</td>
                  <td>{emp.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeeSearch;
