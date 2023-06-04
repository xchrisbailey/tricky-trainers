import { z } from 'zod';

export const dog_schema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  breed: z.string(),
  ageYears: z.number(),
  ageMonths: z.number(),
  uid: z.string().uuid()
});
