import { Router } from "express";
import { userController } from "../controllers";
import { validateSchema, verifyToken,  verifyUserExists} from "../middlewares";
import { createUserSchema, loginUserSchema } from "../schemas";

const userRouter = Router();

userRouter.post(
  "/login",
  validateSchema(loginUserSchema),
  userController.loginUser
);

userRouter.post(
  "/register",
  validateSchema(createUserSchema),
  verifyToken,
  verifyUserExists,
  userController.createUser
  );

export { userRouter };
