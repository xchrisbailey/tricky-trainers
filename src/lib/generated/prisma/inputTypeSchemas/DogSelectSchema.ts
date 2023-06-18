import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"

export const DogSelectSchema: z.ZodType<Prisma.DogSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  flare: z.boolean().optional(),
  breed: z.boolean().optional(),
  age_years: z.boolean().optional(),
  age_months: z.boolean().optional(),
  user_id: z.boolean().optional(),
  AuthUser: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
}).strict()

export default DogSelectSchema;
