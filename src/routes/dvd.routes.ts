import { Router } from "express";
import { verifyToken, isAdm } from "../middlewares";
import { dvdController } from "../controllers";

const dvdRouter = Router();

dvdRouter.post(
  "/dvds/register",
  isAdm,
  dvdController.craetedDvdController
);

dvdRouter.get("/dvds", 
dvdController.getAllDvdController);


// Fazer essa
dvdRouter.post("/dvds/buy/:id",
verifyToken,
dvdController.buyDvdController)

export {dvdRouter}