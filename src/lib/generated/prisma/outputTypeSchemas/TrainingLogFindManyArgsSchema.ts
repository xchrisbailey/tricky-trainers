import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogIncludeSchema } from '../inputTypeSchemas/TrainingLogIncludeSchema'
import { TrainingLogWhereInputSchema } from '../inputTypeSchemas/TrainingLogWhereInputSchema'
import { TrainingLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/TrainingLogOrderByWithRelationInputSchema'
import { TrainingLogWhereUniqueInputSchema } from '../inputTypeSchemas/TrainingLogWhereUniqueInputSchema'
import { TrainingLogScalarFieldEnumSchema } from '../inputTypeSchemas/TrainingLogScalarFieldEnumSchema'
import { DogArgsSchema } from "../outputTypeSchemas/DogArgsSchema"
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"
import { TrainingLogTrickFindManyArgsSchema } from "../outputTypeSchemas/TrainingLogTrickFindManyArgsSchema"
import { TrainingLogCountOutputTypeArgsSchema } from "../outputTypeSchemas/TrainingLogCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TrainingLogSelectSchema: z.ZodType<Prisma.TrainingLogSelect> = z.object({
  id: z.boolean().optional(),
  dog_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  dog: z.union([z.boolean(),z.lazy(() => DogArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
  TrainingLogTrick: z.union([z.boolean(),z.lazy(() => TrainingLogTrickFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TrainingLogCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TrainingLogFindManyArgsSchema: z.ZodType<Prisma.TrainingLogFindManyArgs> = z.object({
  select: TrainingLogSelectSchema.optional(),
  include: TrainingLogIncludeSchema.optional(),
  where: TrainingLogWhereInputSchema.optional(),
  orderBy: z.union([ TrainingLogOrderByWithRelationInputSchema.array(),TrainingLogOrderByWithRelationInputSchema ]).optional(),
  cursor: TrainingLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TrainingLogScalarFieldEnumSchema,TrainingLogScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default TrainingLogFindManyArgsSchema;
