import { z } from 'zod';
import { AuthSessionWhereUniqueInputObjectSchema } from './objects/AuthSessionWhereUniqueInput.schema';
import { AuthSessionCreateInputObjectSchema } from './objects/AuthSessionCreateInput.schema';
import { AuthSessionUncheckedCreateInputObjectSchema } from './objects/AuthSessionUncheckedCreateInput.schema';
import { AuthSessionUpdateInputObjectSchema } from './objects/AuthSessionUpdateInput.schema';
import { AuthSessionUncheckedUpdateInputObjectSchema } from './objects/AuthSessionUncheckedUpdateInput.schema';

export const AuthSessionUpsertSchema = z.object({
  where: AuthSessionWhereUniqueInputObjectSchema,
  create: z.union([
    AuthSessionCreateInputObjectSchema,
    AuthSessionUncheckedCreateInputObjectSchema
  ]),
  update: z.union([AuthSessionUpdateInputObjectSchema, AuthSessionUncheckedUpdateInputObjectSchema])
});
