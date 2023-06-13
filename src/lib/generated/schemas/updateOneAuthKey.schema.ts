import { z } from 'zod';
import { AuthKeyUpdateInputObjectSchema } from './objects/AuthKeyUpdateInput.schema';
import { AuthKeyUncheckedUpdateInputObjectSchema } from './objects/AuthKeyUncheckedUpdateInput.schema';
import { AuthKeyWhereUniqueInputObjectSchema } from './objects/AuthKeyWhereUniqueInput.schema';

export const AuthKeyUpdateOneSchema = z.object({
  data: z.union([AuthKeyUpdateInputObjectSchema, AuthKeyUncheckedUpdateInputObjectSchema]),
  where: AuthKeyWhereUniqueInputObjectSchema
});
