import { z } from 'zod';

export const dog_schema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  flare: z.string(),
  breed: z.string(),
  age_years: z.number().max(20),
  age_months: z.number().max(11),
  training_log: z.string().uuid()
});

export const new_dog_schema = dog_schema.pick({
  name: true,
  breed: true,
  flare: true,
  age_years: true,
  age_months: true
});

export const update_dog_schema = dog_schema.pick({
  name: true,
  breed: true,
  flare: true,
  age_months: true,
  age_years: true
});
