import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrickCreateWithoutUserInputSchema: z.ZodType<Prisma.TrickCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  example: z.string(),
  difficulty: z.number().int(),
  created_on: z.coerce.date().optional()
}).strict();

export default TrickCreateWithoutUserInputSchema;
