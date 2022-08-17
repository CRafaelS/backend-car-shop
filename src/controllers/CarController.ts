import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(
    req: Request,
    res: Response<ICar>,
  ) {
    const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;
    const newCar = { model, year, color, buyValue, seatsQty, doorsQty };
    const results = await this._service.create(newCar);
    return res.status(201).json(results);
  }
}