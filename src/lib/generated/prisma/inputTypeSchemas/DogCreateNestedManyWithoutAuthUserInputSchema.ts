import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogCreateWithoutAuthUserInputSchema } from './DogCreateWithoutAuthUserInputSchema';
import { DogUncheckedCreateWithoutAuthUserInputSchema } from './DogUncheckedCreateWithoutAuthUserInputSchema';
import { DogCreateOrConnectWithoutAuthUserInputSchema } from './DogCreateOrConnectWithoutAuthUserInputSchema';
import { DogCreateManyAuthUserInputEnvelopeSchema } from './DogCreateManyAuthUserInputEnvelopeSchema';
import { DogWhereUniqueInputSchema } from './DogWhereUniqueInputSchema';

export const DogCreateNestedManyWithoutAuthUserInputSchema: z.ZodType<Prisma.DogCreateNestedManyWithoutAuthUserInput> = z.object({
  create: z.union([ z.lazy(() => DogCreateWithoutAuthUserInputSchema),z.lazy(() => DogCreateWithoutAuthUserInputSchema).array(),z.lazy(() => DogUncheckedCreateWithoutAuthUserInputSchema),z.lazy(() => DogUncheckedCreateWithoutAuthUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DogCreateOrConnectWithoutAuthUserInputSchema),z.lazy(() => DogCreateOrConnectWithoutAuthUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DogCreateManyAuthUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DogWhereUniqueInputSchema),z.lazy(() => DogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DogCreateNestedManyWithoutAuthUserInputSchema;
