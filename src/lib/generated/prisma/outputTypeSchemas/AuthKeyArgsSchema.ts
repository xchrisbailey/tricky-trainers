import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthKeySelectSchema } from '../inputTypeSchemas/AuthKeySelectSchema';
import { AuthKeyIncludeSchema } from '../inputTypeSchemas/AuthKeyIncludeSchema';

export const AuthKeyArgsSchema: z.ZodType<Prisma.AuthKeyArgs> = z
  .object({
    select: z.lazy(() => AuthKeySelectSchema).optional(),
    include: z.lazy(() => AuthKeyIncludeSchema).optional()
  })
  .strict();

export default AuthKeyArgsSchema;
