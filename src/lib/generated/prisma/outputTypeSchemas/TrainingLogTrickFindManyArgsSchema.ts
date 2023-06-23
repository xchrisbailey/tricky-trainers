import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogTrickIncludeSchema } from '../inputTypeSchemas/TrainingLogTrickIncludeSchema'
import { TrainingLogTrickWhereInputSchema } from '../inputTypeSchemas/TrainingLogTrickWhereInputSchema'
import { TrainingLogTrickOrderByWithRelationInputSchema } from '../inputTypeSchemas/TrainingLogTrickOrderByWithRelationInputSchema'
import { TrainingLogTrickWhereUniqueInputSchema } from '../inputTypeSchemas/TrainingLogTrickWhereUniqueInputSchema'
import { TrainingLogTrickScalarFieldEnumSchema } from '../inputTypeSchemas/TrainingLogTrickScalarFieldEnumSchema'
import { TrickArgsSchema } from "../outputTypeSchemas/TrickArgsSchema"
import { TrainingLogArgsSchema } from "../outputTypeSchemas/TrainingLogArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TrainingLogTrickSelectSchema: z.ZodType<Prisma.TrainingLogTrickSelect> = z.object({
  trick_id: z.boolean().optional(),
  log_id: z.boolean().optional(),
  understanding: z.boolean().optional(),
  notes: z.boolean().optional(),
  train_date: z.boolean().optional(),
  trick: z.union([z.boolean(),z.lazy(() => TrickArgsSchema)]).optional(),
  training_log: z.union([z.boolean(),z.lazy(() => TrainingLogArgsSchema)]).optional(),
}).strict()

export const TrainingLogTrickFindManyArgsSchema: z.ZodType<Prisma.TrainingLogTrickFindManyArgs> = z.object({
  select: TrainingLogTrickSelectSchema.optional(),
  include: TrainingLogTrickIncludeSchema.optional(),
  where: TrainingLogTrickWhereInputSchema.optional(),
  orderBy: z.union([ TrainingLogTrickOrderByWithRelationInputSchema.array(),TrainingLogTrickOrderByWithRelationInputSchema ]).optional(),
  cursor: TrainingLogTrickWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TrainingLogTrickScalarFieldEnumSchema,TrainingLogTrickScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default TrainingLogTrickFindManyArgsSchema;
