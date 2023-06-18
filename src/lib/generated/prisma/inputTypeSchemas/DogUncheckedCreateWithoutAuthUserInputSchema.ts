import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogUncheckedCreateNestedManyWithoutDogInputSchema } from './TrainingLogUncheckedCreateNestedManyWithoutDogInputSchema';

export const DogUncheckedCreateWithoutAuthUserInputSchema: z.ZodType<Prisma.DogUncheckedCreateWithoutAuthUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  flare: z.string(),
  breed: z.string(),
  age_years: z.number().int(),
  age_months: z.number().int(),
  TrainingLog: z.lazy(() => TrainingLogUncheckedCreateNestedManyWithoutDogInputSchema).optional()
}).strict();

export default DogUncheckedCreateWithoutAuthUserInputSchema;
