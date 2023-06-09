import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogCreateNestedManyWithoutDogInputSchema } from './TrainingLogCreateNestedManyWithoutDogInputSchema';

export const DogCreateWithoutUserInputSchema: z.ZodType<Prisma.DogCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  flare: z.string(),
  breed: z.string(),
  age_years: z.number().int(),
  age_months: z.number().int(),
  TrainingLog: z.lazy(() => TrainingLogCreateNestedManyWithoutDogInputSchema).optional()
}).strict();

export default DogCreateWithoutUserInputSchema;
