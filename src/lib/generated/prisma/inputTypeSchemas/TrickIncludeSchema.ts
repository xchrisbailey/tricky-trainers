import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserArgsSchema } from '../outputTypeSchemas/AuthUserArgsSchema';
import { TrainingLogTrickFindManyArgsSchema } from '../outputTypeSchemas/TrainingLogTrickFindManyArgsSchema';
import { TrickCountOutputTypeArgsSchema } from '../outputTypeSchemas/TrickCountOutputTypeArgsSchema';

export const TrickIncludeSchema: z.ZodType<Prisma.TrickInclude> = z
  .object({
    User: z.union([z.boolean(), z.lazy(() => AuthUserArgsSchema)]).optional(),
    TrainingLogTrick: z
      .union([z.boolean(), z.lazy(() => TrainingLogTrickFindManyArgsSchema)])
      .optional(),
    _count: z.union([z.boolean(), z.lazy(() => TrickCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export default TrickIncludeSchema;
