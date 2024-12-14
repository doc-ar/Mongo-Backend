const express = require("express");
const cors = require("cors")
const connectDB = require("./database/db-connection"); // Import the database connection function
const userRoutes = require("./routes/userRoutes"); // Import user routes
const todoRoutes = require("./routes/todoRoutes.js");

const PORT = 3000;
const app = express();
const corsOptions = { credentials: true, origin: process.env.URL || "*" };

app.use(cors(corsOptions));
app.use(express.json());

// Connect to the database
connectDB();

// Define routes
app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
