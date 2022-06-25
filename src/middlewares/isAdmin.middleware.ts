// import  { Request, Response, NextFunction} from "express"
// import { ErrorHandler } from "../erros"

// const isAdm = async (req: Request, res: Response, next: NextFunction) => {
//     if(!req.decoded.isAdm){
//         throw new ErrorHandler(401, "missing admin permision")
//     }
//     return next()
// }
// export default isAdm

import { Request, Response, NextFunction } from "express";

import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const verifyAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    email: req.email,
  });

  if (!findUser) {
    return res.status(404).json({ error: "User not found" });
  }

  if (findUser && !findUser.isAdm) {
    return res.status(401).json({ error: "Missing Admin Permission" });
  }

  return next();
};

export default verifyAdmMiddleware;