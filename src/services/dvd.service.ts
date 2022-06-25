import { Request } from "express";
import { ErrorHandler } from "../erros";
import { stockRepository } from "../repositories";
import dvdRepository from "../repositories/dvd.repository";
import { serializedCreateDvdSchema } from "../schemas";
import { IDvdRepo } from "../types";

class DvdService {
  createDvdService = async ({ validated }: Request) => {
    const stock = {
      quantity: (validated as IDvdRepo).quantity,
      price: (validated as IDvdRepo).price,
    };

    const saveStock = await stockRepository.save(stock);

    const createDvd = await dvdRepository.save({
      ...(validated as IDvdRepo),
      stock: saveStock,
    });

    return await serializedCreateDvdSchema.validate(createDvd);
  };

  getAllDvdService = async () => {
    const allDvd = await dvdRepository.getAll

    return await serializedCreateDvdSchema.validate(allDvd, { stripUnknown: true });
  };

  buyDvdService = async () => {
    // fazer
  }
}

export default new DvdService();