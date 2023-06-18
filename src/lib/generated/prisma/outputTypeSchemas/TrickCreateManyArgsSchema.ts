import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrickCreateManyInputSchema } from '../inputTypeSchemas/TrickCreateManyInputSchema'

export const TrickCreateManyArgsSchema: z.ZodType<Prisma.TrickCreateManyArgs> = z.object({
  data: z.union([ TrickCreateManyInputSchema,TrickCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default TrickCreateManyArgsSchema;
