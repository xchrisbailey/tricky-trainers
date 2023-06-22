import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DogWhereInputSchema } from '../inputTypeSchemas/DogWhereInputSchema';
import { DogOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DogOrderByWithAggregationInputSchema';
import { DogScalarFieldEnumSchema } from '../inputTypeSchemas/DogScalarFieldEnumSchema';
import { DogScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DogScalarWhereWithAggregatesInputSchema';

export const DogGroupByArgsSchema: z.ZodType<Prisma.DogGroupByArgs> = z
  .object({
    where: DogWhereInputSchema.optional(),
    orderBy: z
      .union([DogOrderByWithAggregationInputSchema.array(), DogOrderByWithAggregationInputSchema])
      .optional(),
    by: DogScalarFieldEnumSchema.array(),
    having: DogScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export default DogGroupByArgsSchema;
