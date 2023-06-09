import { z } from 'zod';

export const dog_schema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  breed: z.string(),
  ageYears: z.number().max(20),
  ageMonths: z.number().max(11),
  uid: z.string().uuid()
});

export const new_dog_schema = z.object({
  name: z.string().nonempty(),
  flare: z.string().nonempty(),
  breed: z.string().nonempty(),
  age_years: z.number().max(25),
  age_months: z.number().max(11)
});

export const update_dog_schema = z.object({
  name: z.string(),
  flare: z.string(),
  age_years: z.number(),
  age_months: z.number(),
  breed: z.string()
});
