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

  public async read(
    _req: Request,
    res: Response<ICar[]>,
  ) {
    const results = await this._service.read();
    return res.status(200).json(results);
  }

  public async readOne(
    req: Request,
    res: Response<ICar>,
  ) {
    const { id } = req.params; 
    const results = await this._service.readOne(id);
    return res.status(200).json(results);
  }

  public async update(
    req: Request,
    res: Response<ICar | null>,
  ) {
    const { id } = req.params; 
    const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;
    const updateCar = { model, year, color, buyValue, seatsQty, doorsQty };
    const results = await this._service.update(id, updateCar);
    return res.status(200).json(results);
  }

  public async delete(req: Request, res: Response<ICar | null>) {
    const { id } = req.params; 
    await this._service.delete(id);
    return res.status(204).json();
  }
}