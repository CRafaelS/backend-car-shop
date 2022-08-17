import { ICar } from '../../interfaces/ICar';

const car: ICar = {
	model: 'Gol',
  year: 2020,
  color: 'prata',
  status: true,
  buyValue: 67000,
  doorsQty: 4,
  seatsQty: 5,
};

const carWithId: ICar & { _id: string } = {
	_id: '62cf1fc6498565d94eba52cd',
	model: 'Gol',
  year: 2020,
  color: 'prata',
  status: true,
  buyValue: 52000,
  doorsQty: 4,
  seatsQty: 5,
};

export {
	car,
	carWithId,
};