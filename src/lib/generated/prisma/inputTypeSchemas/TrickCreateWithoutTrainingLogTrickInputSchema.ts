import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateNestedOneWithoutTricksInputSchema } from './AuthUserCreateNestedOneWithoutTricksInputSchema';

export const TrickCreateWithoutTrainingLogTrickInputSchema: z.ZodType<Prisma.TrickCreateWithoutTrainingLogTrickInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  example: z.string(),
  difficulty: z.number().int(),
  created_on: z.coerce.date().optional(),
  User: z.lazy(() => AuthUserCreateNestedOneWithoutTricksInputSchema).optional()
}).strict();

export default TrickCreateWithoutTrainingLogTrickInputSchema;
