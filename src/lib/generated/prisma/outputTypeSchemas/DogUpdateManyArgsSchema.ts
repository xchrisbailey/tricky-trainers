import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DogUpdateManyMutationInputSchema } from '../inputTypeSchemas/DogUpdateManyMutationInputSchema'
import { DogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DogUncheckedUpdateManyInputSchema'
import { DogWhereInputSchema } from '../inputTypeSchemas/DogWhereInputSchema'

export const DogUpdateManyArgsSchema: z.ZodType<Prisma.DogUpdateManyArgs> = z.object({
  data: z.union([ DogUpdateManyMutationInputSchema,DogUncheckedUpdateManyInputSchema ]),
  where: DogWhereInputSchema.optional(),
}).strict()

export default DogUpdateManyArgsSchema;
