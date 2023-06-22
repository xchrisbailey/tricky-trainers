import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateNestedOneWithoutTricksInputSchema } from './AuthUserCreateNestedOneWithoutTricksInputSchema';
import { TrainingLogTrickCreateNestedManyWithoutTrickInputSchema } from './TrainingLogTrickCreateNestedManyWithoutTrickInputSchema';

export const TrickCreateInputSchema: z.ZodType<Prisma.TrickCreateInput> = z
  .object({
    id: z.string().cuid().optional(),
    name: z.string(),
    description: z.string(),
    example: z.string(),
    difficulty: z.number().int(),
    created_on: z.coerce.date().optional(),
    User: z.lazy(() => AuthUserCreateNestedOneWithoutTricksInputSchema).optional(),
    TrainingLogTrick: z
      .lazy(() => TrainingLogTrickCreateNestedManyWithoutTrickInputSchema)
      .optional()
  })
  .strict();

export default TrickCreateInputSchema;
