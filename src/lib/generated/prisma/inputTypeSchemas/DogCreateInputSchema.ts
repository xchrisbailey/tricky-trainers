import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateNestedOneWithoutDogsInputSchema } from './AuthUserCreateNestedOneWithoutDogsInputSchema';
import { TrainingLogCreateNestedManyWithoutDogInputSchema } from './TrainingLogCreateNestedManyWithoutDogInputSchema';

export const DogCreateInputSchema: z.ZodType<Prisma.DogCreateInput> = z
  .object({
    id: z.string().cuid().optional(),
    name: z.string(),
    flare: z.string(),
    breed: z.string(),
    age_years: z.number().int(),
    age_months: z.number().int(),
    User: z.lazy(() => AuthUserCreateNestedOneWithoutDogsInputSchema).optional(),
    TrainingLog: z.lazy(() => TrainingLogCreateNestedManyWithoutDogInputSchema).optional()
  })
  .strict();

export default DogCreateInputSchema;
