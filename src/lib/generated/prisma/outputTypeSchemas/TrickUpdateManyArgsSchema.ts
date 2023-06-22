import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TrickUpdateManyMutationInputSchema } from '../inputTypeSchemas/TrickUpdateManyMutationInputSchema';
import { TrickUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TrickUncheckedUpdateManyInputSchema';
import { TrickWhereInputSchema } from '../inputTypeSchemas/TrickWhereInputSchema';

export const TrickUpdateManyArgsSchema: z.ZodType<Prisma.TrickUpdateManyArgs> = z
  .object({
    data: z.union([TrickUpdateManyMutationInputSchema, TrickUncheckedUpdateManyInputSchema]),
    where: TrickWhereInputSchema.optional()
  })
  .strict();

export default TrickUpdateManyArgsSchema;
