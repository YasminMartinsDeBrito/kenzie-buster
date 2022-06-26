import { Request } from "express";
import { Dvd, Stock, User } from "../entities";
import { cartRepository, stockRepository } from "../repositories";

import { AssertsShape } from "yup/lib/object";
import { ErrorHandler } from "../erros";

class CartService {
  createCart = async (
    dvd: Dvd,
    userWithPwd: User,
    quantity: number
  ): Promise<AssertsShape<any>> => {
    const { password, ...user } = userWithPwd;

    const cart = Object.assign(new Stock(), {
      total: dvd.stock.price * quantity,
      user,
      dvd,
    });

    await cartRepository.save(cart);

    return { ...cart };
  };

  payCarts = async (req: Request): Promise<AssertsShape<any>> => {
    if (!req.userAuth) {
      throw new ErrorHandler(401, {
        error: "missing admin permission",
      });
    }

    const { comparePwd, password, ...user } = req?.userAuth;

    const cartsNotPaid = await cartRepository.findAllBy({ user, paid: false });

    const cartsPaidRightNow = [];

    for (let cart of cartsNotPaid) {
      const currentStock = await stockRepository.findOne({
        id: cart.dvd.stock.id,
      });
      const boughtDvds = cart.total / currentStock.price;

      if (currentStock.quantity >= boughtDvds) {
        const newStock = Object.assign(currentStock, {
          quantity: currentStock.quantity - boughtDvds,
        });

        cart.dvd.stock = await stockRepository.save(newStock);
        cart.paid = true;
        const { password, ...user } = cart.user;
        cart.user= user;
        await cartRepository.save(cart);
        cartsPaidRightNow.push(cart);
      } else {
        const cartsNotPaidAtEnding = await cartRepository.findAllBy({
          user,
          paid: false,
        });
        throw new ErrorHandler(202, {
          error: {
            Warming: "No sufient products to paid for all carts.",
            paidCarts: cartsPaidRightNow,
            NotPaidCarts: cartsNotPaidAtEnding,
          },
        });
      }
    }

    return { cart: cartsPaidRightNow };
  };
}





export default new CartService();