import { z } from 'zod';

export const TrainingLogTrickScalarFieldEnumSchema = z.enum(['trick_id','log_id','understanding','notes','train_date']);

export default TrainingLogTrickScalarFieldEnumSchema;
