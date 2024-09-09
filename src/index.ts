import express from "express";
import config from "./config/config";
import connectDB from "./config/db";
import userRoutes from "./api/routes/user/index";

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.use("/api/user", userRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

export default app;
