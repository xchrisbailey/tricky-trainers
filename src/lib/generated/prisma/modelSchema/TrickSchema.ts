import { z } from 'zod';

/////////////////////////////////////////
// TRICK SCHEMA
/////////////////////////////////////////

export const TrickSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string(),
  example: z.string(),
  difficulty: z.number().int(),
  added_by: z.string(),
  created_on: z.coerce.date()
});

export type Trick = z.infer<typeof TrickSchema>;

export default TrickSchema;
