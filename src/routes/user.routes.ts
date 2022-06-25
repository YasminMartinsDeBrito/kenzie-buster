import { Router } from "express";
import { userController } from "../controllers";
import { validateSchema, verifyToken,  verifyUserExists, isAdm } from "../middlewares";
import { createUserSchema, loginUserSchema } from "../schemas";

const userRouter = Router();

userRouter.post(
  "/login",
  validateSchema(loginUserSchema),
  userController.loginUser
);

userRouter.post(
  "/register",
  isAdm,
  validateSchema(createUserSchema),
  verifyToken,
  verifyUserExists,
  userController.createUser
  );

export { userRouter };
