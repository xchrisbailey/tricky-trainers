import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateNestedOneWithoutTricksInputSchema } from './AuthUserCreateNestedOneWithoutTricksInputSchema';

export const TrickCreateInputSchema: z.ZodType<Prisma.TrickCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string(),
  example: z.string(),
  difficulty: z.number().int(),
  created_on: z.coerce.date().optional(),
  User: z.lazy(() => AuthUserCreateNestedOneWithoutTricksInputSchema).optional()
}).strict();

export default TrickCreateInputSchema;
