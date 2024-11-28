const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/database");
const userRoutes = require("./src/routes/userRoutes");
const employeeRoutes = require("./src/routes/employeeRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
