import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DogCountOutputTypeSelectSchema: z.ZodType<Prisma.DogCountOutputTypeSelect> = z.object({
  TrainingLog: z.boolean().optional(),
}).strict();

export default DogCountOutputTypeSelectSchema;
