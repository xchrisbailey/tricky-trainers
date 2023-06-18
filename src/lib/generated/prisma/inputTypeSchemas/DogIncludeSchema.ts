import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"

export const DogIncludeSchema: z.ZodType<Prisma.DogInclude> = z.object({
  AuthUser: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
}).strict()

export default DogIncludeSchema;
