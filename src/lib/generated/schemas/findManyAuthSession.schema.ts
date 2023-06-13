import { z } from 'zod';
import { AuthSessionOrderByWithRelationInputObjectSchema } from './objects/AuthSessionOrderByWithRelationInput.schema';
import { AuthSessionWhereInputObjectSchema } from './objects/AuthSessionWhereInput.schema';
import { AuthSessionWhereUniqueInputObjectSchema } from './objects/AuthSessionWhereUniqueInput.schema';
import { AuthSessionScalarFieldEnumSchema } from './enums/AuthSessionScalarFieldEnum.schema';

export const AuthSessionFindManySchema = z.object({
  orderBy: z
    .union([
      AuthSessionOrderByWithRelationInputObjectSchema,
      AuthSessionOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: AuthSessionWhereInputObjectSchema.optional(),
  cursor: AuthSessionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AuthSessionScalarFieldEnumSchema).optional()
});
