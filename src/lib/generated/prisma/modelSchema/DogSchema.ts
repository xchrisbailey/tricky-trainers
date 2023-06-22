import { z } from 'zod';

/////////////////////////////////////////
// DOG SCHEMA
/////////////////////////////////////////

export const DogSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  flare: z.string(),
  breed: z.string(),
  age_years: z.number().int(),
  age_months: z.number().int(),
  user_id: z.string().nullable()
});

export type Dog = z.infer<typeof DogSchema>;

export default DogSchema;
