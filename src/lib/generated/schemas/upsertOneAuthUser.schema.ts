import { z } from 'zod';
import { AuthUserWhereUniqueInputObjectSchema } from './objects/AuthUserWhereUniqueInput.schema';
import { AuthUserCreateInputObjectSchema } from './objects/AuthUserCreateInput.schema';
import { AuthUserUncheckedCreateInputObjectSchema } from './objects/AuthUserUncheckedCreateInput.schema';
import { AuthUserUpdateInputObjectSchema } from './objects/AuthUserUpdateInput.schema';
import { AuthUserUncheckedUpdateInputObjectSchema } from './objects/AuthUserUncheckedUpdateInput.schema';

export const AuthUserUpsertSchema = z.object({
  where: AuthUserWhereUniqueInputObjectSchema,
  create: z.union([AuthUserCreateInputObjectSchema, AuthUserUncheckedCreateInputObjectSchema]),
  update: z.union([AuthUserUpdateInputObjectSchema, AuthUserUncheckedUpdateInputObjectSchema])
});
