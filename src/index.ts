import express from "express";
import config from "./config/config";
import connectDB from "./config/db";
import userRoutes from "./api/routes/user/index";

const cors = require('cors');
const app = express();

// Use CORS middleware
app.use(cors());

const swaggerUi = require('swagger-ui-express');

const swaggerSpec = require('./config/swagger'); // Path to your swagger.js file

// Middleware to serve Swagger API docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.use("/api/user", userRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

export default app;
