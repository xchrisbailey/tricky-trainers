import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrickWhereUniqueInputSchema: z.ZodType<Prisma.TrickWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    example: z.string().optional()
  })
  .strict();

export default TrickWhereUniqueInputSchema;
