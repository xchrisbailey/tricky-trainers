import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DogCreateManyInputSchema } from '../inputTypeSchemas/DogCreateManyInputSchema'

export const DogCreateManyArgsSchema: z.ZodType<Prisma.DogCreateManyArgs> = z.object({
  data: z.union([ DogCreateManyInputSchema,DogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default DogCreateManyArgsSchema;
