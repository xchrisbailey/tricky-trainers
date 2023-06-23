import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"

export const AuthSessionIncludeSchema: z.ZodType<Prisma.AuthSessionInclude> = z.object({
  auth_user: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
}).strict()

export default AuthSessionIncludeSchema;
