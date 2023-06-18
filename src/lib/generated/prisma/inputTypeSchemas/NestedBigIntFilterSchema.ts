import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const NestedBigIntFilterSchema: z.ZodType<Prisma.NestedBigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.union([ z.bigint().array(),z.bigint() ]).optional(),
  notIn: z.union([ z.bigint().array(),z.bigint() ]).optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export default NestedBigIntFilterSchema;
