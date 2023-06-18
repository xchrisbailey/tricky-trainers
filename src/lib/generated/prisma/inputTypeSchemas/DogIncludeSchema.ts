import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"
import { TrainingLogFindManyArgsSchema } from "../outputTypeSchemas/TrainingLogFindManyArgsSchema"
import { DogCountOutputTypeArgsSchema } from "../outputTypeSchemas/DogCountOutputTypeArgsSchema"

export const DogIncludeSchema: z.ZodType<Prisma.DogInclude> = z.object({
  User: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
  TrainingLog: z.union([z.boolean(),z.lazy(() => TrainingLogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DogCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DogIncludeSchema;
