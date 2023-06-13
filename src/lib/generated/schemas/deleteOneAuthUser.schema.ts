import { z } from 'zod';
import { AuthUserWhereUniqueInputObjectSchema } from './objects/AuthUserWhereUniqueInput.schema';

export const AuthUserDeleteOneSchema = z.object({ where: AuthUserWhereUniqueInputObjectSchema });
