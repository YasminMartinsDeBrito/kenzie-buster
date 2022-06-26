import { Router } from "express";
import { dvdController } from "../controllers";
import { validateSchema, verifyToken } from "../middlewares";
import { buyDvdSchema, createDvdSchema } from "../schemas/dvd";

const dvdRouter = Router();

  dvdRouter.post(
    "/register",
    validateSchema(createDvdSchema),
    verifyToken,
    dvdController.createDvd
  );
  dvdRouter.get("/", dvdController.listDvds);
  dvdRouter.post(
    "/buy/:dvdId",
    validateSchema(buyDvdSchema),
    verifyToken,
    dvdController.buyDvd
  );

  export { dvdRouter}
