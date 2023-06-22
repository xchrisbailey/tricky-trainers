import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthKeyCreateWithoutAuth_userInputSchema } from './AuthKeyCreateWithoutAuth_userInputSchema';
import { AuthKeyUncheckedCreateWithoutAuth_userInputSchema } from './AuthKeyUncheckedCreateWithoutAuth_userInputSchema';
import { AuthKeyCreateOrConnectWithoutAuth_userInputSchema } from './AuthKeyCreateOrConnectWithoutAuth_userInputSchema';
import { AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputSchema } from './AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputSchema';
import { AuthKeyCreateManyAuth_userInputEnvelopeSchema } from './AuthKeyCreateManyAuth_userInputEnvelopeSchema';
import { AuthKeyWhereUniqueInputSchema } from './AuthKeyWhereUniqueInputSchema';
import { AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputSchema } from './AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputSchema';
import { AuthKeyUpdateManyWithWhereWithoutAuth_userInputSchema } from './AuthKeyUpdateManyWithWhereWithoutAuth_userInputSchema';
import { AuthKeyScalarWhereInputSchema } from './AuthKeyScalarWhereInputSchema';

export const AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema: z.ZodType<Prisma.AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema),
          z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema).array(),
          z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema),
          z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputSchema),
          z.lazy(() => AuthKeyCreateOrConnectWithoutAuth_userInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputSchema),
          z.lazy(() => AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputSchema).array()
        ])
        .optional(),
      createMany: z.lazy(() => AuthKeyCreateManyAuth_userInputEnvelopeSchema).optional(),
      set: z
        .union([
          z.lazy(() => AuthKeyWhereUniqueInputSchema),
          z.lazy(() => AuthKeyWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AuthKeyWhereUniqueInputSchema),
          z.lazy(() => AuthKeyWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AuthKeyWhereUniqueInputSchema),
          z.lazy(() => AuthKeyWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AuthKeyWhereUniqueInputSchema),
          z.lazy(() => AuthKeyWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputSchema),
          z.lazy(() => AuthKeyUpdateWithWhereUniqueWithoutAuth_userInputSchema).array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => AuthKeyUpdateManyWithWhereWithoutAuth_userInputSchema),
          z.lazy(() => AuthKeyUpdateManyWithWhereWithoutAuth_userInputSchema).array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AuthKeyScalarWhereInputSchema),
          z.lazy(() => AuthKeyScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict();

export default AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema;
