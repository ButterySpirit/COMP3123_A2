import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Backend base URL
});

// Add token to every request if it exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (credentials) => API.post("/users/login", credentials);
export const signup = (userData) => API.post("/users/signup", userData);

export const fetchEmployees = () => API.get("/employees");
export const fetchEmployeeById = (id) => API.get(`/employees/${id}`);
export const createEmployee = (employeeData) => API.post("/employees", employeeData);
export const updateEmployee = (id, employeeData) => API.put(`/employees/${id}`, employeeData);
export const deleteEmployee = (id) => API.delete(`/employees/${id}`);
export const searchEmployees = (query) =>
  API.get(`/employees/search`, { params: { query } });

export default API;
