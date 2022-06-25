import { Router } from "express";
import { cartController } from "../controllers";
import {  verifyToken } from "../middlewares";

const cartRouter = Router();

cartRouter.put(
  "/carts/pay/:id",
  verifyToken,
  cartController.updatedCartController
);

export { cartRouter };