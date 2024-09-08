import express, { Request, Response } from "express";
import User from "./models/userModel";
import config from "./config/config";
import connectDB from "./config/db";

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const users = await User.find().exec();
  res.send(users);
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

export default app;
