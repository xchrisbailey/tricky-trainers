import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DogSelectSchema } from '../inputTypeSchemas/DogSelectSchema';
import { DogIncludeSchema } from '../inputTypeSchemas/DogIncludeSchema';

export const DogArgsSchema: z.ZodType<Prisma.DogArgs> = z.object({
  select: z.lazy(() => DogSelectSchema).optional(),
  include: z.lazy(() => DogIncludeSchema).optional(),
}).strict();

export default DogArgsSchema;
