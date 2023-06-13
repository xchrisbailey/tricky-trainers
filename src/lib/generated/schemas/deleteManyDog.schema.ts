import { z } from 'zod';
import { DogWhereInputObjectSchema } from './objects/DogWhereInput.schema';

export const DogDeleteManySchema = z.object({ where: DogWhereInputObjectSchema.optional() });
