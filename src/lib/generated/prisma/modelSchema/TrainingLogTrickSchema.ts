import { z } from 'zod';

/////////////////////////////////////////
// TRAINING LOG TRICK SCHEMA
/////////////////////////////////////////

export const TrainingLogTrickSchema = z.object({
  trick_id: z.string(),
  log_id: z.string(),
  understanding: z.number().int(),
  notes: z.string().nullable(),
})

export type TrainingLogTrick = z.infer<typeof TrainingLogTrickSchema>

export default TrainingLogTrickSchema;
