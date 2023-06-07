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
  breed: z.string().nonempty(),
  age_years: z.number().max(25),
  age_months: z.number().max(11)
});
