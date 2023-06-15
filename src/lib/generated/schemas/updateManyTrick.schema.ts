import { z } from 'zod';
import { TrickUpdateManyMutationInputObjectSchema } from './objects/TrickUpdateManyMutationInput.schema';
import { TrickWhereInputObjectSchema } from './objects/TrickWhereInput.schema';

export const TrickUpdateManySchema = z.object({
  data: TrickUpdateManyMutationInputObjectSchema,
  where: TrickWhereInputObjectSchema.optional()
});
