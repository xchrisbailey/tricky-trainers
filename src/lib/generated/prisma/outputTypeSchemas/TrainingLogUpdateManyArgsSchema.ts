import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogUpdateManyMutationInputSchema } from '../inputTypeSchemas/TrainingLogUpdateManyMutationInputSchema'
import { TrainingLogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TrainingLogUncheckedUpdateManyInputSchema'
import { TrainingLogWhereInputSchema } from '../inputTypeSchemas/TrainingLogWhereInputSchema'

export const TrainingLogUpdateManyArgsSchema: z.ZodType<Prisma.TrainingLogUpdateManyArgs> = z.object({
  data: z.union([ TrainingLogUpdateManyMutationInputSchema,TrainingLogUncheckedUpdateManyInputSchema ]),
  where: TrainingLogWhereInputSchema.optional(),
}).strict()

export default TrainingLogUpdateManyArgsSchema;
