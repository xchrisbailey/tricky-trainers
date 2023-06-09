import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const DogCreateManyUserInputSchema: z.ZodType<Prisma.DogCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  flare: z.string(),
  breed: z.string(),
  age_years: z.number().int(),
  age_months: z.number().int()
}).strict();

export default DogCreateManyUserInputSchema;
