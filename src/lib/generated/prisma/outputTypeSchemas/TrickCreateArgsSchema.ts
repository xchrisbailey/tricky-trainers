import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrickIncludeSchema } from '../inputTypeSchemas/TrickIncludeSchema'
import { TrickCreateInputSchema } from '../inputTypeSchemas/TrickCreateInputSchema'
import { TrickUncheckedCreateInputSchema } from '../inputTypeSchemas/TrickUncheckedCreateInputSchema'
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

export const TrickCreateArgsSchema: z.ZodType<Prisma.TrickCreateArgs> = z.object({
  select: TrickSelectSchema.optional(),
  include: TrickIncludeSchema.optional(),
  data: z.union([ TrickCreateInputSchema,TrickUncheckedCreateInputSchema ]),
}).strict()

export default TrickCreateArgsSchema;
