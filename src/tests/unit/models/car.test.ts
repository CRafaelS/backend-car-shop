import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { car, carWithId } from '../../mocks/carMock';

describe('Frame Model', () => {
	const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('creating a frame', () => {
		it('successfully created', async () => {
			const newFrame = await carModel.create(car);
			expect(newFrame).to.be.deep.equal(carWithId);
		});
	});
});
 