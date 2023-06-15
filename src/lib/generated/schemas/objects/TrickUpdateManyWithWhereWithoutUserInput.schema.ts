import { z } from 'zod';
import { TrickScalarWhereInputObjectSchema } from './TrickScalarWhereInput.schema';
import { TrickUpdateManyMutationInputObjectSchema } from './TrickUpdateManyMutationInput.schema';
import { TrickUncheckedUpdateManyWithoutTricksInputObjectSchema } from './TrickUncheckedUpdateManyWithoutTricksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => TrickScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TrickUpdateManyMutationInputObjectSchema),
      z.lazy(() => TrickUncheckedUpdateManyWithoutTricksInputObjectSchema)
    ])
  })
  .strict();

export const TrickUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
