import { z } from 'zod';
import { TrickUpdateInputObjectSchema } from './objects/TrickUpdateInput.schema';
import { TrickUncheckedUpdateInputObjectSchema } from './objects/TrickUncheckedUpdateInput.schema';
import { TrickWhereUniqueInputObjectSchema } from './objects/TrickWhereUniqueInput.schema';

export const TrickUpdateOneSchema = z.object({
  data: z.union([TrickUpdateInputObjectSchema, TrickUncheckedUpdateInputObjectSchema]),
  where: TrickWhereUniqueInputObjectSchema
});
