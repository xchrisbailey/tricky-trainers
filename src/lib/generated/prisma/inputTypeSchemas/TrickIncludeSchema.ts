import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"

export const TrickIncludeSchema: z.ZodType<Prisma.TrickInclude> = z.object({
  User: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
}).strict()

export default TrickIncludeSchema;
