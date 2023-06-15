import { z } from 'zod';
import { TrickWhereUniqueInputObjectSchema } from './TrickWhereUniqueInput.schema';
import { TrickUpdateWithoutUserInputObjectSchema } from './TrickUpdateWithoutUserInput.schema';
import { TrickUncheckedUpdateWithoutUserInputObjectSchema } from './TrickUncheckedUpdateWithoutUserInput.schema';
import { TrickCreateWithoutUserInputObjectSchema } from './TrickCreateWithoutUserInput.schema';
import { TrickUncheckedCreateWithoutUserInputObjectSchema } from './TrickUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => TrickWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TrickUpdateWithoutUserInputObjectSchema),
      z.lazy(() => TrickUncheckedUpdateWithoutUserInputObjectSchema)
    ]),
    create: z.union([
      z.lazy(() => TrickCreateWithoutUserInputObjectSchema),
      z.lazy(() => TrickUncheckedCreateWithoutUserInputObjectSchema)
    ])
  })
  .strict();

export const TrickUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
