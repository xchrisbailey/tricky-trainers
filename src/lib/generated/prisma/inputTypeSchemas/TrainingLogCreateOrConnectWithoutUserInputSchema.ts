import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TrainingLogWhereUniqueInputSchema } from './TrainingLogWhereUniqueInputSchema';
import { TrainingLogCreateWithoutUserInputSchema } from './TrainingLogCreateWithoutUserInputSchema';
import { TrainingLogUncheckedCreateWithoutUserInputSchema } from './TrainingLogUncheckedCreateWithoutUserInputSchema';

export const TrainingLogCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.TrainingLogCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => TrainingLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TrainingLogCreateWithoutUserInputSchema),z.lazy(() => TrainingLogUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default TrainingLogCreateOrConnectWithoutUserInputSchema;
