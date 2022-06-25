import { Request, Response, NextFunction} from 'express'
import { ErrorHandler } from '../erros'
import userRepository from '../repositories/user.repository'

const getUserByIdOr404 = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params

    const user = await userRepository.findOne({id})

    if(!user){
        throw new ErrorHandler(404, "User not found")
    }
    req.user = user

    return next()
}
export default getUserByIdOr404