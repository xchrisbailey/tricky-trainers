import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DogIncludeSchema } from '../inputTypeSchemas/DogIncludeSchema'
import { DogWhereUniqueInputSchema } from '../inputTypeSchemas/DogWhereUniqueInputSchema'
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const DogFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DogFindUniqueOrThrowArgs> = z.object({
  select: DogSelectSchema.optional(),
  include: DogIncludeSchema.optional(),
  where: DogWhereUniqueInputSchema,
}).strict()

export default DogFindUniqueOrThrowArgsSchema;
