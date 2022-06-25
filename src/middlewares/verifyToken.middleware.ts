
import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify, VerifyErrors } from "jsonwebtoken";
import { ErrorHandler } from "../erros";
import * as dotenv from "dotenv";
import { User } from "../entities";
dotenv.config();

const verifyToken = async (req: Request, _: Response, next: NextFunction) => {
  const token: string = req.headers.authorization?.split(" ")[1];

  req.validated = req.validated as User
  if (req.validated.isAdm){
      if (!token) {
        throw new ErrorHandler(401, "Missing authorization token.");
      }
  }

  return verify(
    token,
    process.env.SECRET_KEY,
    (err: VerifyErrors, decoded: string | JwtPayload) => {
        req.decoded = decoded as User

        req.validated = req.validated as User

      if (req.validated.isAdm) {
        if(!req.decoded.isAdm){
            throw new ErrorHandler(401, err.message);
        }
      }
      return next();
    }
  );
};
export default verifyToken;
