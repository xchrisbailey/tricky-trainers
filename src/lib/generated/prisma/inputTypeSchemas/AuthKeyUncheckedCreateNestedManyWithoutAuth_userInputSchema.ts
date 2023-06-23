import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthKeyCreateWithoutAuth_userInputSchema } from './AuthKeyCreateWithoutAuth_userInputSchema';
import { AuthKeyUncheckedCreateWithoutAuth_userInputSchema } from './AuthKeyUncheckedCreateWithoutAuth_userInputSchema';
import { AuthKeyCreateOrConnectWithoutAuth_userInputSchema } from './AuthKeyCreateOrConnectWithoutAuth_userInputSchema';
import { AuthKeyCreateManyAuth_userInputEnvelopeSchema } from './AuthKeyCreateManyAuth_userInputEnvelopeSchema';
import { AuthKeyWhereUniqueInputSchema } from './AuthKeyWhereUniqueInputSchema';

export const AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyUncheckedCreateNestedManyWithoutAuth_userInput> = z.object({
  create: z.union([ z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema).array(),z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputSchema),z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthKeyCreateManyAuth_userInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuthKeyWhereUniqueInputSchema),z.lazy(() => AuthKeyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AuthKeyUncheckedCreateNestedManyWithoutAuth_userInputSchema;
