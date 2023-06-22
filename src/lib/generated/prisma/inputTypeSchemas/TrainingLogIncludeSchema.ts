import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DogArgsSchema } from '../outputTypeSchemas/DogArgsSchema';
import { AuthUserArgsSchema } from '../outputTypeSchemas/AuthUserArgsSchema';
import { TrainingLogTrickFindManyArgsSchema } from '../outputTypeSchemas/TrainingLogTrickFindManyArgsSchema';
import { TrainingLogCountOutputTypeArgsSchema } from '../outputTypeSchemas/TrainingLogCountOutputTypeArgsSchema';

export const TrainingLogIncludeSchema: z.ZodType<Prisma.TrainingLogInclude> = z
  .object({
    dog: z.union([z.boolean(), z.lazy(() => DogArgsSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => AuthUserArgsSchema)]).optional(),
    TrainingLogTrick: z
      .union([z.boolean(), z.lazy(() => TrainingLogTrickFindManyArgsSchema)])
      .optional(),
    _count: z.union([z.boolean(), z.lazy(() => TrainingLogCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export default TrainingLogIncludeSchema;
