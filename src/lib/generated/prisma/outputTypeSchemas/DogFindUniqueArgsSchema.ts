import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DogIncludeSchema } from '../inputTypeSchemas/DogIncludeSchema'
import { DogWhereUniqueInputSchema } from '../inputTypeSchemas/DogWhereUniqueInputSchema'
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"
import { TrainingLogFindManyArgsSchema } from "../outputTypeSchemas/TrainingLogFindManyArgsSchema"
import { DogCountOutputTypeArgsSchema } from "../outputTypeSchemas/DogCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DogSelectSchema: z.ZodType<Prisma.DogSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  flare: z.boolean().optional(),
  breed: z.boolean().optional(),
  age_years: z.boolean().optional(),
  age_months: z.boolean().optional(),
  user_id: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
  TrainingLog: z.union([z.boolean(),z.lazy(() => TrainingLogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DogCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DogFindUniqueArgsSchema: z.ZodType<Prisma.DogFindUniqueArgs> = z.object({
  select: DogSelectSchema.optional(),
  include: DogIncludeSchema.optional(),
  where: DogWhereUniqueInputSchema,
}).strict()

export default DogFindUniqueArgsSchema;
