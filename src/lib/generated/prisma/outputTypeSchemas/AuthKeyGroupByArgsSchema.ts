import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthKeyWhereInputSchema } from '../inputTypeSchemas/AuthKeyWhereInputSchema';
import { AuthKeyOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AuthKeyOrderByWithAggregationInputSchema';
import { AuthKeyScalarFieldEnumSchema } from '../inputTypeSchemas/AuthKeyScalarFieldEnumSchema';
import { AuthKeyScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AuthKeyScalarWhereWithAggregatesInputSchema';

export const AuthKeyGroupByArgsSchema: z.ZodType<Prisma.AuthKeyGroupByArgs> = z
  .object({
    where: AuthKeyWhereInputSchema.optional(),
    orderBy: z
      .union([
        AuthKeyOrderByWithAggregationInputSchema.array(),
        AuthKeyOrderByWithAggregationInputSchema
      ])
      .optional(),
    by: AuthKeyScalarFieldEnumSchema.array(),
    having: AuthKeyScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export default AuthKeyGroupByArgsSchema;
