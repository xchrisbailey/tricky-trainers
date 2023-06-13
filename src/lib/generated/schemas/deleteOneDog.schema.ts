import { z } from 'zod';
import { DogWhereUniqueInputObjectSchema } from './objects/DogWhereUniqueInput.schema';

export const DogDeleteOneSchema = z.object({ where: DogWhereUniqueInputObjectSchema });
