import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthSessionFindManyArgsSchema } from '../outputTypeSchemas/AuthSessionFindManyArgsSchema';
import { AuthKeyFindManyArgsSchema } from '../outputTypeSchemas/AuthKeyFindManyArgsSchema';
import { DogFindManyArgsSchema } from '../outputTypeSchemas/DogFindManyArgsSchema';
import { TrickFindManyArgsSchema } from '../outputTypeSchemas/TrickFindManyArgsSchema';
import { TrainingLogFindManyArgsSchema } from '../outputTypeSchemas/TrainingLogFindManyArgsSchema';
import { AuthUserCountOutputTypeArgsSchema } from '../outputTypeSchemas/AuthUserCountOutputTypeArgsSchema';

export const AuthUserIncludeSchema: z.ZodType<Prisma.AuthUserInclude> = z
  .object({
    auth_session: z.union([z.boolean(), z.lazy(() => AuthSessionFindManyArgsSchema)]).optional(),
    auth_key: z.union([z.boolean(), z.lazy(() => AuthKeyFindManyArgsSchema)]).optional(),
    dogs: z.union([z.boolean(), z.lazy(() => DogFindManyArgsSchema)]).optional(),
    tricks: z.union([z.boolean(), z.lazy(() => TrickFindManyArgsSchema)]).optional(),
    TrainingLog: z.union([z.boolean(), z.lazy(() => TrainingLogFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => AuthUserCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export default AuthUserIncludeSchema;
