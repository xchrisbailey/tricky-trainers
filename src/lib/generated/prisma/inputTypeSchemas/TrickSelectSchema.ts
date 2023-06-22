import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserArgsSchema } from '../outputTypeSchemas/AuthUserArgsSchema';
import { TrainingLogTrickFindManyArgsSchema } from '../outputTypeSchemas/TrainingLogTrickFindManyArgsSchema';
import { TrickCountOutputTypeArgsSchema } from '../outputTypeSchemas/TrickCountOutputTypeArgsSchema';

export const TrickSelectSchema: z.ZodType<Prisma.TrickSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    example: z.boolean().optional(),
    difficulty: z.boolean().optional(),
    added_by: z.boolean().optional(),
    created_on: z.boolean().optional(),
    User: z.union([z.boolean(), z.lazy(() => AuthUserArgsSchema)]).optional(),
    TrainingLogTrick: z
      .union([z.boolean(), z.lazy(() => TrainingLogTrickFindManyArgsSchema)])
      .optional(),
    _count: z.union([z.boolean(), z.lazy(() => TrickCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export default TrickSelectSchema;
