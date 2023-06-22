import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickCreateWithoutTrainingLogTrickInputSchema } from './TrickCreateWithoutTrainingLogTrickInputSchema';
import { TrickUncheckedCreateWithoutTrainingLogTrickInputSchema } from './TrickUncheckedCreateWithoutTrainingLogTrickInputSchema';
import { TrickCreateOrConnectWithoutTrainingLogTrickInputSchema } from './TrickCreateOrConnectWithoutTrainingLogTrickInputSchema';
import { TrickUpsertWithoutTrainingLogTrickInputSchema } from './TrickUpsertWithoutTrainingLogTrickInputSchema';
import { TrickWhereUniqueInputSchema } from './TrickWhereUniqueInputSchema';
import { TrickUpdateWithoutTrainingLogTrickInputSchema } from './TrickUpdateWithoutTrainingLogTrickInputSchema';
import { TrickUncheckedUpdateWithoutTrainingLogTrickInputSchema } from './TrickUncheckedUpdateWithoutTrainingLogTrickInputSchema';

export const TrickUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema: z.ZodType<Prisma.TrickUpdateOneRequiredWithoutTrainingLogTrickNestedInput> =
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
      upsert: z.lazy(() => TrickUpsertWithoutTrainingLogTrickInputSchema).optional(),
      connect: z.lazy(() => TrickWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => TrickUpdateWithoutTrainingLogTrickInputSchema),
          z.lazy(() => TrickUncheckedUpdateWithoutTrainingLogTrickInputSchema)
        ])
        .optional()
    })
    .strict();

export default TrickUpdateOneRequiredWithoutTrainingLogTrickNestedInputSchema;
