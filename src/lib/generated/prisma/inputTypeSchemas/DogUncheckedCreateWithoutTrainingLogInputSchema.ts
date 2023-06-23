import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const DogUncheckedCreateWithoutTrainingLogInputSchema: z.ZodType<Prisma.DogUncheckedCreateWithoutTrainingLogInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  flare: z.string(),
  breed: z.string(),
  age_years: z.number().int(),
  age_months: z.number().int(),
  user_id: z.string().optional().nullable()
}).strict();

export default DogUncheckedCreateWithoutTrainingLogInputSchema;
