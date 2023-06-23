import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"
import { TrainingLogFindManyArgsSchema } from "../outputTypeSchemas/TrainingLogFindManyArgsSchema"
import { DogCountOutputTypeArgsSchema } from "../outputTypeSchemas/DogCountOutputTypeArgsSchema"

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

export default DogSelectSchema;
