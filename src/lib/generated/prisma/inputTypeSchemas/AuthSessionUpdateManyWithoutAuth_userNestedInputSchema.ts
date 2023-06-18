import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthSessionCreateWithoutAuth_userInputSchema } from './AuthSessionCreateWithoutAuth_userInputSchema';
import { AuthSessionUncheckedCreateWithoutAuth_userInputSchema } from './AuthSessionUncheckedCreateWithoutAuth_userInputSchema';
import { AuthSessionCreateOrConnectWithoutAuth_userInputSchema } from './AuthSessionCreateOrConnectWithoutAuth_userInputSchema';
import { AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputSchema } from './AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputSchema';
import { AuthSessionCreateManyAuth_userInputEnvelopeSchema } from './AuthSessionCreateManyAuth_userInputEnvelopeSchema';
import { AuthSessionWhereUniqueInputSchema } from './AuthSessionWhereUniqueInputSchema';
import { AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputSchema } from './AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputSchema';
import { AuthSessionUpdateManyWithWhereWithoutAuth_userInputSchema } from './AuthSessionUpdateManyWithWhereWithoutAuth_userInputSchema';
import { AuthSessionScalarWhereInputSchema } from './AuthSessionScalarWhereInputSchema';

export const AuthSessionUpdateManyWithoutAuth_userNestedInputSchema: z.ZodType<Prisma.AuthSessionUpdateManyWithoutAuth_userNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionCreateWithoutAuth_userInputSchema).array(),z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUncheckedCreateWithoutAuth_userInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputSchema),z.lazy(() => AuthSessionCreateOrConnectWithoutAuth_userInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUpsertWithWhereUniqueWithoutAuth_userInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthSessionCreateManyAuth_userInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuthSessionWhereUniqueInputSchema),z.lazy(() => AuthSessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUpdateWithWhereUniqueWithoutAuth_userInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuthSessionUpdateManyWithWhereWithoutAuth_userInputSchema),z.lazy(() => AuthSessionUpdateManyWithWhereWithoutAuth_userInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuthSessionScalarWhereInputSchema),z.lazy(() => AuthSessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AuthSessionUpdateManyWithoutAuth_userNestedInputSchema;
