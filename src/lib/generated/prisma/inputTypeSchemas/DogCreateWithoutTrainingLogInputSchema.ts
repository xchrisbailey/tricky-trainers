import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateNestedOneWithoutDogsInputSchema } from './AuthUserCreateNestedOneWithoutDogsInputSchema';

export const DogCreateWithoutTrainingLogInputSchema: z.ZodType<Prisma.DogCreateWithoutTrainingLogInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  flare: z.string(),
  breed: z.string(),
  age_years: z.number().int(),
  age_months: z.number().int(),
  AuthUser: z.lazy(() => AuthUserCreateNestedOneWithoutDogsInputSchema).optional()
}).strict();

export default DogCreateWithoutTrainingLogInputSchema;
