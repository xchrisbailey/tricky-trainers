import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogCreateManyInputSchema } from '../inputTypeSchemas/TrainingLogCreateManyInputSchema'

export const TrainingLogCreateManyArgsSchema: z.ZodType<Prisma.TrainingLogCreateManyArgs> = z.object({
  data: z.union([ TrainingLogCreateManyInputSchema,TrainingLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default TrainingLogCreateManyArgsSchema;
