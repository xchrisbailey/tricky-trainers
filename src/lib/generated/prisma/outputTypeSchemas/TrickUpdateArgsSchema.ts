import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrickIncludeSchema } from '../inputTypeSchemas/TrickIncludeSchema'
import { TrickUpdateInputSchema } from '../inputTypeSchemas/TrickUpdateInputSchema'
import { TrickUncheckedUpdateInputSchema } from '../inputTypeSchemas/TrickUncheckedUpdateInputSchema'
import { TrickWhereUniqueInputSchema } from '../inputTypeSchemas/TrickWhereUniqueInputSchema'
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"
import { TrainingLogTrickFindManyArgsSchema } from "../outputTypeSchemas/TrainingLogTrickFindManyArgsSchema"
import { TrickCountOutputTypeArgsSchema } from "../outputTypeSchemas/TrickCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TrickSelectSchema: z.ZodType<Prisma.TrickSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  example: z.boolean().optional(),
  difficulty: z.boolean().optional(),
  added_by: z.boolean().optional(),
  created_on: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
  TrainingLogTrick: z.union([z.boolean(),z.lazy(() => TrainingLogTrickFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TrickCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TrickUpdateArgsSchema: z.ZodType<Prisma.TrickUpdateArgs> = z.object({
  select: TrickSelectSchema.optional(),
  include: TrickIncludeSchema.optional(),
  data: z.union([ TrickUpdateInputSchema,TrickUncheckedUpdateInputSchema ]),
  where: TrickWhereUniqueInputSchema,
}).strict()

export default TrickUpdateArgsSchema;
