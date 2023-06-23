import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickWhereUniqueInputSchema } from './TrickWhereUniqueInputSchema';
import { TrickCreateWithoutUserInputSchema } from './TrickCreateWithoutUserInputSchema';
import { TrickUncheckedCreateWithoutUserInputSchema } from './TrickUncheckedCreateWithoutUserInputSchema';

export const TrickCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.TrickCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => TrickWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TrickCreateWithoutUserInputSchema),z.lazy(() => TrickUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default TrickCreateOrConnectWithoutUserInputSchema;
