import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrickIncludeSchema } from '../inputTypeSchemas/TrickIncludeSchema'
import { TrickWhereUniqueInputSchema } from '../inputTypeSchemas/TrickWhereUniqueInputSchema'
import { AuthUserArgsSchema } from "../outputTypeSchemas/AuthUserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TrickSelectSchema: z.ZodType<Prisma.TrickSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  example: z.boolean().optional(),
  difficulty: z.boolean().optional(),
  added_by: z.boolean().optional(),
  created_on: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => AuthUserArgsSchema)]).optional(),
}).strict()

export const TrickFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TrickFindUniqueOrThrowArgs> = z.object({
  select: TrickSelectSchema.optional(),
  include: TrickIncludeSchema.optional(),
  where: TrickWhereUniqueInputSchema,
}).strict()

export default TrickFindUniqueOrThrowArgsSchema;
