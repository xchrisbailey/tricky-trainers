import { z } from 'zod';

export const trick_schema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string(),
  example: z.string().url(),
  difficulty: z.number().min(1).max(5),
  created_on: z.string().datetime()
});

export const new_trick_schema = trick_schema.pick({
  name: true,
  description: true,
  example: true,
  difficulty: true
});
