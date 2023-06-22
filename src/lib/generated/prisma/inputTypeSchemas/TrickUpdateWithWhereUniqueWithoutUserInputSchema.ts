import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickWhereUniqueInputSchema } from './TrickWhereUniqueInputSchema';
import { TrickUpdateWithoutUserInputSchema } from './TrickUpdateWithoutUserInputSchema';
import { TrickUncheckedUpdateWithoutUserInputSchema } from './TrickUncheckedUpdateWithoutUserInputSchema';

export const TrickUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TrickUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => TrickWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => TrickUpdateWithoutUserInputSchema),
        z.lazy(() => TrickUncheckedUpdateWithoutUserInputSchema)
      ])
    })
    .strict();

export default TrickUpdateWithWhereUniqueWithoutUserInputSchema;
