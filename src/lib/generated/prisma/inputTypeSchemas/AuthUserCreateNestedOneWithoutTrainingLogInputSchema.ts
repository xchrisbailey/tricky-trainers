import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { AuthUserCreateWithoutTrainingLogInputSchema } from './AuthUserCreateWithoutTrainingLogInputSchema';
import { AuthUserUncheckedCreateWithoutTrainingLogInputSchema } from './AuthUserUncheckedCreateWithoutTrainingLogInputSchema';
import { AuthUserCreateOrConnectWithoutTrainingLogInputSchema } from './AuthUserCreateOrConnectWithoutTrainingLogInputSchema';
import { AuthUserWhereUniqueInputSchema } from './AuthUserWhereUniqueInputSchema';

export const AuthUserCreateNestedOneWithoutTrainingLogInputSchema: z.ZodType<Prisma.AuthUserCreateNestedOneWithoutTrainingLogInput> = z.object({
  create: z.union([ z.lazy(() => AuthUserCreateWithoutTrainingLogInputSchema),z.lazy(() => AuthUserUncheckedCreateWithoutTrainingLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AuthUserCreateOrConnectWithoutTrainingLogInputSchema).optional(),
  connect: z.lazy(() => AuthUserWhereUniqueInputSchema).optional()
}).strict();

export default AuthUserCreateNestedOneWithoutTrainingLogInputSchema;
