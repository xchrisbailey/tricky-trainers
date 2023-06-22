import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthKeyWhereInputSchema } from '../inputTypeSchemas/AuthKeyWhereInputSchema';
import { AuthKeyOrderByWithRelationInputSchema } from '../inputTypeSchemas/AuthKeyOrderByWithRelationInputSchema';
import { AuthKeyWhereUniqueInputSchema } from '../inputTypeSchemas/AuthKeyWhereUniqueInputSchema';

export const AuthKeyAggregateArgsSchema: z.ZodType<Prisma.AuthKeyAggregateArgs> = z
  .object({
    where: AuthKeyWhereInputSchema.optional(),
    orderBy: z
      .union([AuthKeyOrderByWithRelationInputSchema.array(), AuthKeyOrderByWithRelationInputSchema])
      .optional(),
    cursor: AuthKeyWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export default AuthKeyAggregateArgsSchema;
