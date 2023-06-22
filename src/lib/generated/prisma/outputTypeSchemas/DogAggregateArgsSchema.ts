import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DogWhereInputSchema } from '../inputTypeSchemas/DogWhereInputSchema';
import { DogOrderByWithRelationInputSchema } from '../inputTypeSchemas/DogOrderByWithRelationInputSchema';
import { DogWhereUniqueInputSchema } from '../inputTypeSchemas/DogWhereUniqueInputSchema';

export const DogAggregateArgsSchema: z.ZodType<Prisma.DogAggregateArgs> = z
  .object({
    where: DogWhereInputSchema.optional(),
    orderBy: z
      .union([DogOrderByWithRelationInputSchema.array(), DogOrderByWithRelationInputSchema])
      .optional(),
    cursor: DogWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional()
  })
  .strict();

export default DogAggregateArgsSchema;
