import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrickIncludeSchema } from '../inputTypeSchemas/TrickIncludeSchema';
import { TrickWhereInputSchema } from '../inputTypeSchemas/TrickWhereInputSchema';
import { TrickOrderByWithRelationInputSchema } from '../inputTypeSchemas/TrickOrderByWithRelationInputSchema';
import { TrickWhereUniqueInputSchema } from '../inputTypeSchemas/TrickWhereUniqueInputSchema';
import { TrickScalarFieldEnumSchema } from '../inputTypeSchemas/TrickScalarFieldEnumSchema';
import { AuthUserArgsSchema } from '../outputTypeSchemas/AuthUserArgsSchema';
import { TrickCountOutputTypeArgsSchema } from '../outputTypeSchemas/TrickCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const TrickFindManyArgsSchema: z.ZodType<Prisma.TrickFindManyArgs> = z
  .object({
    select: TrickSelectSchema.optional(),
    include: TrickIncludeSchema.optional(),
    where: TrickWhereInputSchema.optional(),
    orderBy: z
      .union([TrickOrderByWithRelationInputSchema.array(), TrickOrderByWithRelationInputSchema])
      .optional(),
    cursor: TrickWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([TrickScalarFieldEnumSchema, TrickScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export default TrickFindManyArgsSchema;
