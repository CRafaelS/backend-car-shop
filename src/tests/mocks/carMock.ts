import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
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

const allcar: ICar[] & { _id: string }[] = [
    {
      _id: '62cf1fc6498565d94eba52cd',
      model: 'Gol',
      year: 2020,
      color: 'prata',
      status: true,
      buyValue: 52000,
      doorsQty: 4,
      seatsQty: 5,
    },
    {
      _id: '62cf1fc6498565d94eba53cd',
      model: 'Onix',
      year: 2020,
      color: 'vermelho',
      status: true,
      buyValue: 73000,
      doorsQty: 4,
      seatsQty: 5,
    }
  ];

export {
	carMock,
	carWithId,
  allcar,
};