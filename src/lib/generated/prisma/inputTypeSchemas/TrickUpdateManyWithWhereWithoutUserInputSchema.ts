import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickScalarWhereInputSchema } from './TrickScalarWhereInputSchema';
import { TrickUpdateManyMutationInputSchema } from './TrickUpdateManyMutationInputSchema';
import { TrickUncheckedUpdateManyWithoutTricksInputSchema } from './TrickUncheckedUpdateManyWithoutTricksInputSchema';

export const TrickUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.TrickUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => TrickScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => TrickUpdateManyMutationInputSchema),
        z.lazy(() => TrickUncheckedUpdateManyWithoutTricksInputSchema)
      ])
    })
    .strict();

export default TrickUpdateManyWithWhereWithoutUserInputSchema;
