import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrickWhereInputSchema } from '../inputTypeSchemas/TrickWhereInputSchema';

export const TrickDeleteManyArgsSchema: z.ZodType<Prisma.TrickDeleteManyArgs> = z
  .object({
    where: TrickWhereInputSchema.optional()
  })
  .strict();

export default TrickDeleteManyArgsSchema;
