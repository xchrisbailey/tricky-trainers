import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NestedBigIntNullableFilterSchema } from './NestedBigIntNullableFilterSchema';

export const BigIntNullableFilterSchema: z.ZodType<Prisma.BigIntNullableFilter> = z
  .object({
    equals: z.bigint().optional().nullable(),
    in: z.union([z.bigint().array(), z.bigint()]).optional().nullable(),
    notIn: z.union([z.bigint().array(), z.bigint()]).optional().nullable(),
    lt: z.bigint().optional(),
    lte: z.bigint().optional(),
    gt: z.bigint().optional(),
    gte: z.bigint().optional(),
    not: z
      .union([z.bigint(), z.lazy(() => NestedBigIntNullableFilterSchema)])
      .optional()
      .nullable()
  })
  .strict();

export default BigIntNullableFilterSchema;
