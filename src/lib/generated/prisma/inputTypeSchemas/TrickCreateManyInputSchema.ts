import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrickCreateManyInputSchema: z.ZodType<Prisma.TrickCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  example: z.string(),
  difficulty: z.number().int(),
  added_by: z.string(),
  created_on: z.coerce.date().optional()
}).strict();

export default TrickCreateManyInputSchema;
