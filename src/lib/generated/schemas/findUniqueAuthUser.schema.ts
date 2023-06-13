import { z } from 'zod';
import { AuthUserWhereUniqueInputObjectSchema } from './objects/AuthUserWhereUniqueInput.schema';

export const AuthUserFindUniqueSchema = z.object({ where: AuthUserWhereUniqueInputObjectSchema });
