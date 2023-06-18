import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateWithoutTrainingLogInputSchema } from './AuthUserCreateWithoutTrainingLogInputSchema';
import { AuthUserUncheckedCreateWithoutTrainingLogInputSchema } from './AuthUserUncheckedCreateWithoutTrainingLogInputSchema';
import { AuthUserCreateOrConnectWithoutTrainingLogInputSchema } from './AuthUserCreateOrConnectWithoutTrainingLogInputSchema';
import { AuthUserUpsertWithoutTrainingLogInputSchema } from './AuthUserUpsertWithoutTrainingLogInputSchema';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';
import { AuthUserUpdateWithoutTrainingLogInputSchema } from './AuthUserUpdateWithoutTrainingLogInputSchema';
import { AuthUserUncheckedUpdateWithoutTrainingLogInputSchema } from './AuthUserUncheckedUpdateWithoutTrainingLogInputSchema';

export const AuthUserUpdateOneRequiredWithoutTrainingLogNestedInputSchema: z.ZodType<Prisma.AuthUserUpdateOneRequiredWithoutTrainingLogNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthUserCreateWithoutTrainingLogInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutTrainingLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutTrainingLogInputSchema).optional(),
  upsert: z.lazy(() => AuthUserUpsertWithoutTrainingLogInputSchema).optional(),
  connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AuthUserUpdateWithoutTrainingLogInputSchema),z.lazy(() => AuthUserUncheckedUpdateWithoutTrainingLogInputSchema) ]).optional(),
}).strict();

export default AuthUserUpdateOneRequiredWithoutTrainingLogNestedInputSchema;
