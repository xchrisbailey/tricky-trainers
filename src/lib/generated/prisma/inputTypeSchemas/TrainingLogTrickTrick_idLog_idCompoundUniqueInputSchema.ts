import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TrainingLogTrickTrick_idLog_idCompoundUniqueInputSchema: z.ZodType<Prisma.TrainingLogTrickTrick_idLog_idCompoundUniqueInput> =
  z
    .object({
      trick_id: z.string(),
      log_id: z.string()
    })
    .strict();

export default TrainingLogTrickTrick_idLog_idCompoundUniqueInputSchema;
