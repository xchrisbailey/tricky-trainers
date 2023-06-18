import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DogCountOutputTypeSelectSchema } from './DogCountOutputTypeSelectSchema';

export const DogCountOutputTypeArgsSchema: z.ZodType<Prisma.DogCountOutputTypeArgs> = z.object({
  select: z.lazy(() => DogCountOutputTypeSelectSchema).nullish(),
}).strict();

export default DogCountOutputTypeSelectSchema;
