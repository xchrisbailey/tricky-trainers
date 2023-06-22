import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickWhereUniqueInputSchema } from './TrickWhereUniqueInputSchema';
import { TrickCreateWithoutTrainingLogTrickInputSchema } from './TrickCreateWithoutTrainingLogTrickInputSchema';
import { TrickUncheckedCreateWithoutTrainingLogTrickInputSchema } from './TrickUncheckedCreateWithoutTrainingLogTrickInputSchema';

export const TrickCreateOrConnectWithoutTrainingLogTrickInputSchema: z.ZodType<Prisma.TrickCreateOrConnectWithoutTrainingLogTrickInput> =
  z
    .object({
      where: z.lazy(() => TrickWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TrickCreateWithoutTrainingLogTrickInputSchema),
        z.lazy(() => TrickUncheckedCreateWithoutTrainingLogTrickInputSchema)
      ])
    })
    .strict();

export default TrickCreateOrConnectWithoutTrainingLogTrickInputSchema;
