import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogTrickIncludeSchema } from '../inputTypeSchemas/TrainingLogTrickIncludeSchema';
import { TrainingLogTrickUpdateInputSchema } from '../inputTypeSchemas/TrainingLogTrickUpdateInputSchema';
import { TrainingLogTrickUncheckedUpdateInputSchema } from '../inputTypeSchemas/TrainingLogTrickUncheckedUpdateInputSchema';
import { TrainingLogTrickWhereUniqueInputSchema } from '../inputTypeSchemas/TrainingLogTrickWhereUniqueInputSchema';
import { TrickArgsSchema } from '../outputTypeSchemas/TrickArgsSchema';
import { TrainingLogArgsSchema } from '../outputTypeSchemas/TrainingLogArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TrainingLogTrickSelectSchema: z.ZodType<Prisma.TrainingLogTrickSelect> = z
  .object({
    trick_id: z.boolean().optional(),
    log_id: z.boolean().optional(),
    understanding: z.boolean().optional(),
    notes: z.boolean().optional(),
    train_date: z.boolean().optional(),
    trick: z.union([z.boolean(), z.lazy(() => TrickArgsSchema)]).optional(),
    training_log: z.union([z.boolean(), z.lazy(() => TrainingLogArgsSchema)]).optional()
  })
  .strict();

export const TrainingLogTrickUpdateArgsSchema: z.ZodType<Prisma.TrainingLogTrickUpdateArgs> = z
  .object({
    select: TrainingLogTrickSelectSchema.optional(),
    include: TrainingLogTrickIncludeSchema.optional(),
    data: z.union([TrainingLogTrickUpdateInputSchema, TrainingLogTrickUncheckedUpdateInputSchema]),
    where: TrainingLogTrickWhereUniqueInputSchema
  })
  .strict();

export default TrainingLogTrickUpdateArgsSchema;
