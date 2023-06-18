import { z } from 'zod';

/////////////////////////////////////////
// TRAINING LOG SCHEMA
/////////////////////////////////////////

export const TrainingLogSchema = z.object({
  id: z.string().cuid(),
  dog_id: z.string(),
  user_id: z.string(),
})

export type TrainingLog = z.infer<typeof TrainingLogSchema>

export default TrainingLogSchema;
