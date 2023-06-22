import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const DogWhereUniqueInputSchema: z.ZodType<Prisma.DogWhereUniqueInput> = z
  .object({
    id: z.string().optional()
  })
  .strict();

export default DogWhereUniqueInputSchema;
