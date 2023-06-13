import { z } from 'zod';
import { AuthUserUpdateInputObjectSchema } from './objects/AuthUserUpdateInput.schema';
import { AuthUserUncheckedUpdateInputObjectSchema } from './objects/AuthUserUncheckedUpdateInput.schema';
import { AuthUserWhereUniqueInputObjectSchema } from './objects/AuthUserWhereUniqueInput.schema';

export const AuthUserUpdateOneSchema = z.object({
  data: z.union([AuthUserUpdateInputObjectSchema, AuthUserUncheckedUpdateInputObjectSchema]),
  where: AuthUserWhereUniqueInputObjectSchema
});
