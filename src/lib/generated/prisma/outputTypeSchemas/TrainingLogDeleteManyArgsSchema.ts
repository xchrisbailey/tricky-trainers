import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogWhereInputSchema } from '../inputTypeSchemas/TrainingLogWhereInputSchema';

export const TrainingLogDeleteManyArgsSchema: z.ZodType<Prisma.TrainingLogDeleteManyArgs> = z
  .object({
    where: TrainingLogWhereInputSchema.optional()
  })
  .strict();

export default TrainingLogDeleteManyArgsSchema;
