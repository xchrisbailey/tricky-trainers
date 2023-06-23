import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DogWhereInputSchema } from '../inputTypeSchemas/DogWhereInputSchema'

export const DogDeleteManyArgsSchema: z.ZodType<Prisma.DogDeleteManyArgs> = z.object({
  where: DogWhereInputSchema.optional(),
}).strict()

export default DogDeleteManyArgsSchema;
