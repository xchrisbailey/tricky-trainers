import { z } from 'zod';
import { AuthKeyWhereUniqueInputObjectSchema } from './objects/AuthKeyWhereUniqueInput.schema';

export const AuthKeyFindUniqueSchema = z.object({ where: AuthKeyWhereUniqueInputObjectSchema });
