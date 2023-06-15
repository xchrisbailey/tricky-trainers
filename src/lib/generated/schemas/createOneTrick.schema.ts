import { z } from 'zod';
import { TrickCreateInputObjectSchema } from './objects/TrickCreateInput.schema';
import { TrickUncheckedCreateInputObjectSchema } from './objects/TrickUncheckedCreateInput.schema';

export const TrickCreateOneSchema = z.object({
  data: z.union([TrickCreateInputObjectSchema, TrickUncheckedCreateInputObjectSchema])
});
