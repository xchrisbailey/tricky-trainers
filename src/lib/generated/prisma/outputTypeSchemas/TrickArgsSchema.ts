import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrickSelectSchema } from '../inputTypeSchemas/TrickSelectSchema';
import { TrickIncludeSchema } from '../inputTypeSchemas/TrickIncludeSchema';

export const TrickArgsSchema: z.ZodType<Prisma.TrickArgs> = z.object({
  select: z.lazy(() => TrickSelectSchema).optional(),
  include: z.lazy(() => TrickIncludeSchema).optional(),
}).strict();

export default TrickArgsSchema;
