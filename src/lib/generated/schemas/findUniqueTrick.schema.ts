import { z } from 'zod';
import { TrickWhereUniqueInputObjectSchema } from './objects/TrickWhereUniqueInput.schema';

export const TrickFindUniqueSchema = z.object({ where: TrickWhereUniqueInputObjectSchema });
