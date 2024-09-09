import { Request, Response } from "express";
import UserService from "../../../services/userService";

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await UserService.getAllUser();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
