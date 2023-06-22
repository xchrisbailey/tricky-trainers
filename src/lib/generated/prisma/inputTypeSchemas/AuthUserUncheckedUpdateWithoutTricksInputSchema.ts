import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { RoleSchema } from './RoleSchema';
import { EnumRoleFieldUpdateOperationsInputSchema } from './EnumRoleFieldUpdateOperationsInputSchema';
import { AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputSchema } from './AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputSchema';
import { AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema } from './AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema';
import { DogUncheckedUpdateManyWithoutUserNestedInputSchema } from './DogUncheckedUpdateManyWithoutUserNestedInputSchema';
import { TrainingLogUncheckedUpdateManyWithoutUserNestedInputSchema } from './TrainingLogUncheckedUpdateManyWithoutUserNestedInputSchema';

export const AuthUserUncheckedUpdateWithoutTricksInputSchema: z.ZodType<Prisma.AuthUserUncheckedUpdateWithoutTricksInput> =
  z
    .object({
      id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
      first_name: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      last_name: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
        .optional(),
      role: z
        .union([z.lazy(() => RoleSchema), z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema)])
        .optional(),
      auth_session: z
        .lazy(() => AuthSessionUncheckedUpdateManyWithoutAuth_userNestedInputSchema)
        .optional(),
      auth_key: z
        .lazy(() => AuthKeyUncheckedUpdateManyWithoutAuth_userNestedInputSchema)
        .optional(),
      dogs: z.lazy(() => DogUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
      TrainingLog: z
        .lazy(() => TrainingLogUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional()
    })
    .strict();

export default AuthUserUncheckedUpdateWithoutTricksInputSchema;
