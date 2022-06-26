import { Router } from "express";
import { cartController } from "../controllers";
import {  verifyToken } from "../middlewares";

const cartRouter = Router();

cartRouter.put(
  "/pay",
  verifyToken,
  cartController.payCart
);

export { cartRouter };