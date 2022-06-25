import { Request, Response} from 'express'
import cartService from '../services/cart.service'


class CartController {
 payCartController = async(req: Request, res: Response) => {
  const cart = await cartService.payCartService(req)
  res.status(cart.status).json(cart.message)
 }
  }
  
  export default new CartController();