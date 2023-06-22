import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { QueryModeSchema } from './QueryModeSchema';
import { NestedStringWithAggregatesFilterSchema } from './NestedStringWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedStringFilterSchema } from './NestedStringFilterSchema';

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.union([z.string().array(), z.string()]).optional(),
    notIn: z.union([z.string().array(), z.string()]).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional()
  })
  .strict();

export default StringWithAggregatesFilterSchema;
