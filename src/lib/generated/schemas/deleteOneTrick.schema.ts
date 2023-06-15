import { z } from 'zod';
import { TrickWhereUniqueInputObjectSchema } from './objects/TrickWhereUniqueInput.schema';

export const TrickDeleteOneSchema = z.object({ where: TrickWhereUniqueInputObjectSchema });
