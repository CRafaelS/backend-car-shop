import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { carMock, carWithId, allcar } from '../../mocks/carMock';

describe('Car Model', () => {
	const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carWithId);
		sinon.stub(Model, 'find').resolves(allcar);
		sinon.stub(Model, 'findOne').resolves(carWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('creating a Car', () => {
		it('successfully created', async () => {
			const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carWithId);
		});
	});

	describe('searching all Cars', () => {
		it('successfully found all Cars', async () => {
			const carFound = await carModel.read();
			expect(carFound).to.be.deep.equal(allcar);
		});
	});

	describe('searching a Car', () => {
		it('successfully found', async () => {
			const carFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
			expect(carFound).to.be.deep.equal(carWithId);
		});

		it('_id not found', async () => {
			try {
				await carModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
});
 