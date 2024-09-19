import { Request, Response } from "express";
import UserService from "../../../services/userService";
import { validationResult } from "express-validator";
import User from "../../../models/userModel";

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

export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, mobileNumber } = req.body;

  try {
    let user = await UserService.getUserByEmail(email);
    if (user) {
      return res
        .status(400)
        .json({ msg: "User with this email already exists" });
    }

    user = await UserService.getUserByMobile(mobileNumber);
    if (user) {
      return res
        .status(400)
        .json({ msg: "User with this mobile number already exists" });
    }

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password,
      mobileNumber,
    });

    await newUser.save();

    return res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const loginUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { emailOrMobile, password } = req.body;

  try {
    let user =
      (await UserService.getUserByEmail(emailOrMobile)) ||
      (await UserService.getUserByMobile(emailOrMobile));

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    return res.status(200).json({ msg: "Login successful" });
  } catch (err) {
    return res.status(500).send("Server error");
  }
};
