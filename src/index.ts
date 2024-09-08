import express, { Request, Response } from "express";
const app = express();

import config from "./config/config";
import connectDB from "./config/db";

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

export default app;
