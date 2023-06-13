import { z } from 'zod';
import { AuthUserOrderByWithRelationInputObjectSchema } from './objects/AuthUserOrderByWithRelationInput.schema';
import { AuthUserWhereInputObjectSchema } from './objects/AuthUserWhereInput.schema';
import { AuthUserWhereUniqueInputObjectSchema } from './objects/AuthUserWhereUniqueInput.schema';
import { AuthUserScalarFieldEnumSchema } from './enums/AuthUserScalarFieldEnum.schema';

export const AuthUserFindManySchema = z.object({
  orderBy: z
    .union([
      AuthUserOrderByWithRelationInputObjectSchema,
      AuthUserOrderByWithRelationInputObjectSchema.array()
    ])
    .optional(),
  where: AuthUserWhereInputObjectSchema.optional(),
  cursor: AuthUserWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AuthUserScalarFieldEnumSchema).optional()
});
