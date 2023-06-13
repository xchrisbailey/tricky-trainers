import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { AuthUserUpdateOneWithoutDogsNestedInputObjectSchema } from './AuthUserUpdateOneWithoutDogsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DogUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    flare: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    breed: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    age_years: z
      .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    age_months: z
      .union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    AuthUser: z.lazy(() => AuthUserUpdateOneWithoutDogsNestedInputObjectSchema).optional()
  })
  .strict();

export const DogUpdateInputObjectSchema = Schema;
