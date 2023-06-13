import { z } from 'zod';
import { AuthKeyOrderByWithRelationInputObjectSchema } from './objects/AuthKeyOrderByWithRelationInput.schema';
import { AuthKeyWhereInputObjectSchema } from './objects/AuthKeyWhereInput.schema';
import { AuthKeyWhereUniqueInputObjectSchema } from './objects/AuthKeyWhereUniqueInput.schema';
import { AuthKeyScalarFieldEnumSchema } from './enums/AuthKeyScalarFieldEnum.schema';

export const AuthKeyFindFirstSchema = z.object({
  orderBy: z
    .union([
      AuthKeyOrderByWithRelationInputObjectSchema,
      AuthKeyOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: AuthKeyWhereInputObjectSchema.optional(),
  cursor: AuthKeyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AuthKeyScalarFieldEnumSchema).optional()
});
