import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DogCreateWithoutAuthUserInputSchema } from './DogCreateWithoutAuthUserInputSchema';
import { DogUncheckedCreateWithoutAuthUserInputSchema } from './DogUncheckedCreateWithoutAuthUserInputSchema';
import { DogCreateOrConnectWithoutAuthUserInputSchema } from './DogCreateOrConnectWithoutAuthUserInputSchema';
import { DogUpsertWithWhereUniqueWithoutAuthUserInputSchema } from './DogUpsertWithWhereUniqueWithoutAuthUserInputSchema';
import { DogCreateManyAuthUserInputEnvelopeSchema } from './DogCreateManyAuthUserInputEnvelopeSchema';
import { DogWhereUniqueInputSchema } from './DogWhereUniqueInputSchema';
import { DogUpdateWithWhereUniqueWithoutAuthUserInputSchema } from './DogUpdateWithWhereUniqueWithoutAuthUserInputSchema';
import { DogUpdateManyWithWhereWithoutAuthUserInputSchema } from './DogUpdateManyWithWhereWithoutAuthUserInputSchema';
import { DogScalarWhereInputSchema } from './DogScalarWhereInputSchema';

export const DogUncheckedUpdateManyWithoutAuthUserNestedInputSchema: z.ZodType<Prisma.DogUncheckedUpdateManyWithoutAuthUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => DogCreateWithoutAuthUserInputSchema),z.lazy(() => DogCreateWithoutAuthUserInputSchema).array(),z.lazy(() => DogUncheckedCreateWithoutAuthUserInputSchema),z.lazy(() => DogUncheckedCreateWithoutAuthUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DogCreateOrConnectWithoutAuthUserInputSchema),z.lazy(() => DogCreateOrConnectWithoutAuthUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DogUpsertWithWhereUniqueWithoutAuthUserInputSchema),z.lazy(() => DogUpsertWithWhereUniqueWithoutAuthUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DogCreateManyAuthUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DogWhereUniqueInputSchema),z.lazy(() => DogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DogWhereUniqueInputSchema),z.lazy(() => DogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DogWhereUniqueInputSchema),z.lazy(() => DogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DogWhereUniqueInputSchema),z.lazy(() => DogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DogUpdateWithWhereUniqueWithoutAuthUserInputSchema),z.lazy(() => DogUpdateWithWhereUniqueWithoutAuthUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DogUpdateManyWithWhereWithoutAuthUserInputSchema),z.lazy(() => DogUpdateManyWithWhereWithoutAuthUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DogScalarWhereInputSchema),z.lazy(() => DogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DogUncheckedUpdateManyWithoutAuthUserNestedInputSchema;
