import { z } from 'zod';
import { AuthKeyWhereUniqueInputObjectSchema } from './objects/AuthKeyWhereUniqueInput.schema';
import { AuthKeyCreateInputObjectSchema } from './objects/AuthKeyCreateInput.schema';
import { AuthKeyUncheckedCreateInputObjectSchema } from './objects/AuthKeyUncheckedCreateInput.schema';
import { AuthKeyUpdateInputObjectSchema } from './objects/AuthKeyUpdateInput.schema';
import { AuthKeyUncheckedUpdateInputObjectSchema } from './objects/AuthKeyUncheckedUpdateInput.schema';

export const AuthKeyUpsertSchema = z.object({
  where: AuthKeyWhereUniqueInputObjectSchema,
  create: z.union([AuthKeyCreateInputObjectSchema, AuthKeyUncheckedCreateInputObjectSchema]),
  update: z.union([AuthKeyUpdateInputObjectSchema, AuthKeyUncheckedUpdateInputObjectSchema])
});
