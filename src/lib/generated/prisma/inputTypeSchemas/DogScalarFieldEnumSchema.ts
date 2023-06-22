import { z } from 'zod';

export const DogScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'flare',
  'breed',
  'age_years',
  'age_months',
  'user_id'
]);

export default DogScalarFieldEnumSchema;
