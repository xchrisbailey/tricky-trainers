import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthKeyScalarWhereInputSchema } from './AuthKeyScalarWhereInputSchema';
import { AuthKeyUpdateManyMutationInputSchema } from './AuthKeyUpdateManyMutationInputSchema';
import { AuthKeyUncheckedUpdateManyWithoutAuth_keyInputSchema } from './AuthKeyUncheckedUpdateManyWithoutAuth_keyInputSchema';

export const AuthKeyUpdateManyWithWhereWithoutAuth_userInputSchema: z.ZodType<Prisma.AuthKeyUpdateManyWithWhereWithoutAuth_userInput> = z.object({
  where: z.lazy(() => AuthKeyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AuthKeyUpdateManyMutationInputSchema),z.lazy(() => AuthKeyUncheckedUpdateManyWithoutAuth_keyInputSchema) ]),
}).strict();

export default AuthKeyUpdateManyWithWhereWithoutAuth_userInputSchema;
