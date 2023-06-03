import { z } from 'zod';

export const user_schema = z.object({
  email: z.string().email(),
  password: z.string()
});
