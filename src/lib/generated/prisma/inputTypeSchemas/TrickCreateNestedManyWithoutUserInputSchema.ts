import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickCreateWithoutUserInputSchema } from './TrickCreateWithoutUserInputSchema';
import { TrickUncheckedCreateWithoutUserInputSchema } from './TrickUncheckedCreateWithoutUserInputSchema';
import { TrickCreateOrConnectWithoutUserInputSchema } from './TrickCreateOrConnectWithoutUserInputSchema';
import { TrickCreateManyUserInputEnvelopeSchema } from './TrickCreateManyUserInputEnvelopeSchema';
import { TrickWhereUniqueInputSchema } from './TrickWhereUniqueInputSchema';

export const TrickCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TrickCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TrickCreateWithoutUserInputSchema),z.lazy(() => TrickCreateWithoutUserInputSchema).array(),z.lazy(() => TrickUncheckedCreateWithoutUserInputSchema),z.lazy(() => TrickUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TrickCreateOrConnectWithoutUserInputSchema),z.lazy(() => TrickCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TrickCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TrickWhereUniqueInputSchema),z.lazy(() => TrickWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TrickCreateNestedManyWithoutUserInputSchema;
