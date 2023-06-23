import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrickWhereUniqueInputSchema } from './TrickWhereUniqueInputSchema';
import { TrickUpdateWithoutUserInputSchema } from './TrickUpdateWithoutUserInputSchema';
import { TrickUncheckedUpdateWithoutUserInputSchema } from './TrickUncheckedUpdateWithoutUserInputSchema';
import { TrickCreateWithoutUserInputSchema } from './TrickCreateWithoutUserInputSchema';
import { TrickUncheckedCreateWithoutUserInputSchema } from './TrickUncheckedCreateWithoutUserInputSchema';

export const TrickUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TrickUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TrickWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TrickUpdateWithoutUserInputSchema),z.lazy(() => TrickUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => TrickCreateWithoutUserInputSchema),z.lazy(() => TrickUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default TrickUpsertWithWhereUniqueWithoutUserInputSchema;
