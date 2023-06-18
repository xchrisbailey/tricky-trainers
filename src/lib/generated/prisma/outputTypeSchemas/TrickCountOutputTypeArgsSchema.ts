import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrickCountOutputTypeSelectSchema } from './TrickCountOutputTypeSelectSchema';

export const TrickCountOutputTypeArgsSchema: z.ZodType<Prisma.TrickCountOutputTypeArgs> = z.object({
  select: z.lazy(() => TrickCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TrickCountOutputTypeSelectSchema;
