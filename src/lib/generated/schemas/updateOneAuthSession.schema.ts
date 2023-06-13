import { z } from 'zod';
import { AuthSessionUpdateInputObjectSchema } from './objects/AuthSessionUpdateInput.schema';
import { AuthSessionUncheckedUpdateInputObjectSchema } from './objects/AuthSessionUncheckedUpdateInput.schema';
import { AuthSessionWhereUniqueInputObjectSchema } from './objects/AuthSessionWhereUniqueInput.schema';

export const AuthSessionUpdateOneSchema = z.object({
  data: z.union([AuthSessionUpdateInputObjectSchema, AuthSessionUncheckedUpdateInputObjectSchema]),
  where: AuthSessionWhereUniqueInputObjectSchema
});
