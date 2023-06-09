import { z } from 'zod';

export const dog_schema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  breed: z.string(),
  age_years: z.number().max(20),
  age_months: z.number().max(11),
  training_log: z.string().uuid(),
  uid: z.string().uuid()
});

export const new_dog_schema = dog_schema.pick({
  name: true,
  breed: true,
  age_years: true,
  age_months: true,
  uid: true
});

export const update_dog_schema = dog_schema.pick({
  name: true,
  breed: true,
  age_months: true,
  age_years: true
});
