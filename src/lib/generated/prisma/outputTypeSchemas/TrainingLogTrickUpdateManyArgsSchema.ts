import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogTrickUpdateManyMutationInputSchema } from '../inputTypeSchemas/TrainingLogTrickUpdateManyMutationInputSchema'
import { TrainingLogTrickUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TrainingLogTrickUncheckedUpdateManyInputSchema'
import { TrainingLogTrickWhereInputSchema } from '../inputTypeSchemas/TrainingLogTrickWhereInputSchema'

export const TrainingLogTrickUpdateManyArgsSchema: z.ZodType<Prisma.TrainingLogTrickUpdateManyArgs> = z.object({
  data: z.union([ TrainingLogTrickUpdateManyMutationInputSchema,TrainingLogTrickUncheckedUpdateManyInputSchema ]),
  where: TrainingLogTrickWhereInputSchema.optional(),
}).strict()

export default TrainingLogTrickUpdateManyArgsSchema;
