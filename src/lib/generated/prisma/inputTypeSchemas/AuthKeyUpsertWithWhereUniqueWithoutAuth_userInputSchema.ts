import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthKeyWhereUniqueInputSchema } from './AuthKeyWhereUniqueInputSchema';
import { AuthKeyUpdateWithoutAuth_userInputSchema } from './AuthKeyUpdateWithoutAuth_userInputSchema';
import { AuthKeyUncheckedUpdateWithoutAuth_userInputSchema } from './AuthKeyUncheckedUpdateWithoutAuth_userInputSchema';
import { AuthKeyCreateWithoutAuth_userInputSchema } from './AuthKeyCreateWithoutAuth_userInputSchema';
import { AuthKeyUncheckedCreateWithoutAuth_userInputSchema } from './AuthKeyUncheckedCreateWithoutAuth_userInputSchema';

export const AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyUpsertWithWhereUniqueWithoutAuth_userInput> = z.object({
  where: z.lazy(() => AuthKeyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AuthKeyUpdateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUncheckedUpdateWithoutAuth_userInputSchema) ]),
  create: z.union([ z.lazy(() => AuthKeyCreateWithoutAuth_userInputSchema),z.lazy(() => AuthKeyUncheckedCreateWithoutAuth_userInputSchema) ]),
}).strict();

export default AuthKeyUpsertWithWhereUniqueWithoutAuth_userInputSchema;
