import { z } from 'zod';
import { TrickWhereUniqueInputObjectSchema } from './TrickWhereUniqueInput.schema';
import { TrickCreateWithoutUserInputObjectSchema } from './TrickCreateWithoutUserInput.schema';
import { TrickUncheckedCreateWithoutUserInputObjectSchema } from './TrickUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TrickCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => TrickWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TrickCreateWithoutUserInputObjectSchema),
      z.lazy(() => TrickUncheckedCreateWithoutUserInputObjectSchema)
    ])
  })
  .strict();

export const TrickCreateOrConnectWithoutUserInputObjectSchema = Schema;
