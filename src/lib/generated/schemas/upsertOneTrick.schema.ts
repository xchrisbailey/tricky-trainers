import { z } from 'zod';
import { TrickWhereUniqueInputObjectSchema } from './objects/TrickWhereUniqueInput.schema';
import { TrickCreateInputObjectSchema } from './objects/TrickCreateInput.schema';
import { TrickUncheckedCreateInputObjectSchema } from './objects/TrickUncheckedCreateInput.schema';
import { TrickUpdateInputObjectSchema } from './objects/TrickUpdateInput.schema';
import { TrickUncheckedUpdateInputObjectSchema } from './objects/TrickUncheckedUpdateInput.schema';

export const TrickUpsertSchema = z.object({
  where: TrickWhereUniqueInputObjectSchema,
  create: z.union([TrickCreateInputObjectSchema, TrickUncheckedCreateInputObjectSchema]),
  update: z.union([TrickUpdateInputObjectSchema, TrickUncheckedUpdateInputObjectSchema])
});
