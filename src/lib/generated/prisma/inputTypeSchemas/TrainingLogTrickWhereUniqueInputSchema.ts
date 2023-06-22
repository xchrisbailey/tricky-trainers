import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogTrickTrick_idLog_idCompoundUniqueInputSchema } from './TrainingLogTrickTrick_idLog_idCompoundUniqueInputSchema';

export const TrainingLogTrickWhereUniqueInputSchema: z.ZodType<Prisma.TrainingLogTrickWhereUniqueInput> =
  z
    .object({
      trick_id_log_id: z
        .lazy(() => TrainingLogTrickTrick_idLog_idCompoundUniqueInputSchema)
        .optional()
    })
    .strict();

export default TrainingLogTrickWhereUniqueInputSchema;
