import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const motorcycleZodSchema = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().lte(2500),
});

const motorcycleSchema = motorcycleZodSchema.merge(vehicleZodSchema);

type IMotorcycle = z.infer<typeof motorcycleSchema>;

export { IMotorcycle, motorcycleZodSchema };
