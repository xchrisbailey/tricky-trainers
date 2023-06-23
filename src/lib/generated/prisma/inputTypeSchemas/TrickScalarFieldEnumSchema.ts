import { z } from 'zod';

export const TrickScalarFieldEnumSchema = z.enum(['id','name','description','example','difficulty','added_by','created_on']);

export default TrickScalarFieldEnumSchema;
