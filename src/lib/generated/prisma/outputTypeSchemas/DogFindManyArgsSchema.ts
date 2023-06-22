import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DogIncludeSchema } from '../inputTypeSchemas/DogIncludeSchema';
import { DogWhereInputSchema } from '../inputTypeSchemas/DogWhereInputSchema';
import { DogOrderByWithRelationInputSchema } from '../inputTypeSchemas/DogOrderByWithRelationInputSchema';
import { DogWhereUniqueInputSchema } from '../inputTypeSchemas/DogWhereUniqueInputSchema';
import { DogScalarFieldEnumSchema } from '../inputTypeSchemas/DogScalarFieldEnumSchema';
import { AuthUserArgsSchema } from '../outputTypeSchemas/AuthUserArgsSchema';
import { TrainingLogFindManyArgsSchema } from '../outputTypeSchemas/TrainingLogFindManyArgsSchema';
import { DogCountOutputTypeArgsSchema } from '../outputTypeSchemas/DogCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DogSelectSchema: z.ZodType<Prisma.DogSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    flare: z.boolean().optional(),
    breed: z.boolean().optional(),
    age_years: z.boolean().optional(),
    age_months: z.boolean().optional(),
    user_id: z.boolean().optional(),
    User: z.union([z.boolean(), z.lazy(() => AuthUserArgsSchema)]).optional(),
    TrainingLog: z.union([z.boolean(), z.lazy(() => TrainingLogFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => DogCountOutputTypeArgsSchema)]).optional()
  })
  .strict();

export const DogFindManyArgsSchema: z.ZodType<Prisma.DogFindManyArgs> = z
  .object({
    select: DogSelectSchema.optional(),
    include: DogIncludeSchema.optional(),
    where: DogWhereInputSchema.optional(),
    orderBy: z
      .union([DogOrderByWithRelationInputSchema.array(), DogOrderByWithRelationInputSchema])
      .optional(),
    cursor: DogWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([DogScalarFieldEnumSchema, DogScalarFieldEnumSchema.array()]).optional()
  })
  .strict();

export default DogFindManyArgsSchema;
