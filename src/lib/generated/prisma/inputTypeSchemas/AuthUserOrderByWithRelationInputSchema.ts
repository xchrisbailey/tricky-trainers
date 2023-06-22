import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AuthSessionOrderByRelationAggregateInputSchema } from './AuthSessionOrderByRelationAggregateInputSchema';
import { AuthKeyOrderByRelationAggregateInputSchema } from './AuthKeyOrderByRelationAggregateInputSchema';
import { DogOrderByRelationAggregateInputSchema } from './DogOrderByRelationAggregateInputSchema';
import { TrickOrderByRelationAggregateInputSchema } from './TrickOrderByRelationAggregateInputSchema';
import { TrainingLogOrderByRelationAggregateInputSchema } from './TrainingLogOrderByRelationAggregateInputSchema';

export const AuthUserOrderByWithRelationInputSchema: z.ZodType<Prisma.AuthUserOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      first_name: z.lazy(() => SortOrderSchema).optional(),
      last_name: z.lazy(() => SortOrderSchema).optional(),
      role: z.lazy(() => SortOrderSchema).optional(),
      auth_session: z.lazy(() => AuthSessionOrderByRelationAggregateInputSchema).optional(),
      auth_key: z.lazy(() => AuthKeyOrderByRelationAggregateInputSchema).optional(),
      dogs: z.lazy(() => DogOrderByRelationAggregateInputSchema).optional(),
      tricks: z.lazy(() => TrickOrderByRelationAggregateInputSchema).optional(),
      TrainingLog: z.lazy(() => TrainingLogOrderByRelationAggregateInputSchema).optional()
    })
    .strict();

export default AuthUserOrderByWithRelationInputSchema;
