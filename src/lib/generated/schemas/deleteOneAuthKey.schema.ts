import { z } from 'zod';
import { AuthKeyWhereUniqueInputObjectSchema } from './objects/AuthKeyWhereUniqueInput.schema';

export const AuthKeyDeleteOneSchema = z.object({ where: AuthKeyWhereUniqueInputObjectSchema });
