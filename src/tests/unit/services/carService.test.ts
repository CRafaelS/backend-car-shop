import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMock, carWithId, allcar } from '../../mocks/carMock';

describe('car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);
 
	before(() => {
		sinon.stub(carModel, 'create').resolves(carWithId);
		sinon.stub(carModel, 'read').resolves(allcar);
		sinon.stub(carModel, 'readOne')
			.onCall(0).resolves(carWithId)
			.onCall(1).resolves(null)
			.onCall(2).resolves(carWithId);
		sinon.stub(carModel, 'update').resolves(carWithId);
	})
	after(() => {
		sinon.restore()
	})
	describe('Create car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(carMock);

			expect(carCreated).to.be.deep.equal(carWithId);
		});

		it('Failure', async () => {
			try {
				await carService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('Read All Car', () => {
		it('Success', async () => {
			const car = await carService.read();

			expect(car).to.be.deep.equal(allcar);
		});
	});

	describe('ReadOne Car', () => {
		it('Success', async () => {
			const carFound = await carService.readOne(carWithId._id);

			expect(carFound).to.be.deep.equal(carWithId);
		});

		it('Failure', async () => {
			try {
				await carService.readOne(carWithId._id);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

	describe('Update Frame', () => {
		it('Success', async () => {
		  const carFound = await carService.update('62cf1fc6498565d94eba52cd', carMock);
		  expect(carFound).to.be.deep.equal(carWithId);
		});

		it('Failure', async () => {
			try {
				await carService.update(carWithId._id, carMock);
			} catch (error:any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});
});