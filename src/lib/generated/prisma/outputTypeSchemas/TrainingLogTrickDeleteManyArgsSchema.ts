import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogTrickWhereInputSchema } from '../inputTypeSchemas/TrainingLogTrickWhereInputSchema'

export const TrainingLogTrickDeleteManyArgsSchema: z.ZodType<Prisma.TrainingLogTrickDeleteManyArgs> = z.object({
  where: TrainingLogTrickWhereInputSchema.optional(),
}).strict()

export default TrainingLogTrickDeleteManyArgsSchema;
