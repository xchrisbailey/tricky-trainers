import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { AuthUserUpdateOneWithoutDogsNestedInputSchema } from './AuthUserUpdateOneWithoutDogsNestedInputSchema';
import { TrainingLogUpdateManyWithoutDogNestedInputSchema } from './TrainingLogUpdateManyWithoutDogNestedInputSchema';

export const DogUpdateInputSchema: z.ZodType<Prisma.DogUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  flare: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  breed: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  age_years: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  age_months: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => AuthUserUpdateOneWithoutDogsNestedInputSchema).optional(),
  TrainingLog: z.lazy(() => TrainingLogUpdateManyWithoutDogNestedInputSchema).optional()
}).strict();

export default DogUpdateInputSchema;
