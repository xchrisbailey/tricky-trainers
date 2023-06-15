import { z } from 'zod';
import { TrickWhereUniqueInputObjectSchema } from './TrickWhereUniqueInput.schema';
import { TrickUpdateWithoutUserInputObjectSchema } from './TrickUpdateWithoutUserInput.schema';
import { TrickUncheckedUpdateWithoutUserInputObjectSchema } from './TrickUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => TrickWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TrickUpdateWithoutUserInputObjectSchema),
      z.lazy(() => TrickUncheckedUpdateWithoutUserInputObjectSchema)
    ])
  })
  .strict();

export const TrickUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
