import { z } from 'zod';
import { TrickWhereInputObjectSchema } from './objects/TrickWhereInput.schema';

export const TrickDeleteManySchema = z.object({ where: TrickWhereInputObjectSchema.optional() });
