import { z } from 'zod';
import { DogWhereUniqueInputObjectSchema } from './objects/DogWhereUniqueInput.schema';

export const DogFindUniqueSchema = z.object({ where: DogWhereUniqueInputObjectSchema });
