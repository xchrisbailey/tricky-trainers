import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickCreateWithoutTrainingLogTrickInputSchema } from './TrickCreateWithoutTrainingLogTrickInputSchema';
import { TrickUncheckedCreateWithoutTrainingLogTrickInputSchema } from './TrickUncheckedCreateWithoutTrainingLogTrickInputSchema';
import { TrickCreateOrConnectWithoutTrainingLogTrickInputSchema } from './TrickCreateOrConnectWithoutTrainingLogTrickInputSchema';
import { TrickWhereUniqueInputSchema } from './TrickWhereUniqueInputSchema';

export const TrickCreateNestedOneWithoutTrainingLogTrickInputSchema: z.ZodType<Prisma.TrickCreateNestedOneWithoutTrainingLogTrickInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TrickCreateWithoutTrainingLogTrickInputSchema),
          z.lazy(() => TrickUncheckedCreateWithoutTrainingLogTrickInputSchema)
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TrickCreateOrConnectWithoutTrainingLogTrickInputSchema)
        .optional(),
      connect: z.lazy(() => TrickWhereUniqueInputSchema).optional()
    })
    .strict();

export default TrickCreateNestedOneWithoutTrainingLogTrickInputSchema;
