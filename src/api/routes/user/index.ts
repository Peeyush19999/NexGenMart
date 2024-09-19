import { Router } from "express";
import {
  getAllUsers,
  getUser,
  registerUser,
  loginUser,
} from "./user.controller";
import { loginValidator, signUpValidator } from "./validation";

const router = Router();

router.get("/", getAllUsers);

router.get("/:id", getUser);

/**
 * @openapi
 * /api/user/signup:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user in the system with provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Jane Doe
 *               email:
 *                 type: string
 *                 example: jane.doe@example.com
 *               password:
 *                 type: string
 *                 example: securepassword123
 *               mobileNumber:
 *                 type: string
 *                 example: 1234567890
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: User registered successfully
 *       400:
 *         description: Bad request, user with this email or mobile number already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: User with this email or mobile number already exists
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Internal server error
 */
router.post("/signup", signUpValidator, registerUser);

/**
 * @openapi
 * /api/user/login:
 *   post:
 *     summary: Login a user
 *     description: Authenticates a user based on email or mobile number and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               emailOrMobile:
 *                 type: string
 *                 example: jane.doe@example.com
 *               password:
 *                 type: string
 *                 example: securepassword123
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Login successful
 *       400:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Invalid credentials
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Server error
 */
router.post("/login", loginValidator, loginUser);

export default router;
