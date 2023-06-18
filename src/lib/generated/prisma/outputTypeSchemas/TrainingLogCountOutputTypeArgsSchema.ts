import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrainingLogCountOutputTypeSelectSchema } from './TrainingLogCountOutputTypeSelectSchema';

export const TrainingLogCountOutputTypeArgsSchema: z.ZodType<Prisma.TrainingLogCountOutputTypeArgs> = z.object({
  select: z.lazy(() => TrainingLogCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TrainingLogCountOutputTypeSelectSchema;
