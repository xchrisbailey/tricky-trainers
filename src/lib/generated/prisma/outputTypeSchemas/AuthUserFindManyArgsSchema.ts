import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthUserIncludeSchema } from '../inputTypeSchemas/AuthUserIncludeSchema'
import { AuthUserWhereInputSchema } from '../inputTypeSchemas/AuthUserWhereInputSchema'
import { AuthUserOrderByWithRelationInputSchema } from '../inputTypeSchemas/AuthUserOrderByWithRelationInputSchema'
import { AuthUserWhereUniqueInputSchema } from '../inputTypeSchemas/AuthUserWhereUniqueInputSchema'
import { AuthUserScalarFieldEnumSchema } from '../inputTypeSchemas/AuthUserScalarFieldEnumSchema'
import { AuthSessionFindManyArgsSchema } from "../outputTypeSchemas/AuthSessionFindManyArgsSchema"
import { AuthKeyFindManyArgsSchema } from "../outputTypeSchemas/AuthKeyFindManyArgsSchema"
import { DogFindManyArgsSchema } from "../outputTypeSchemas/DogFindManyArgsSchema"
import { TrickFindManyArgsSchema } from "../outputTypeSchemas/TrickFindManyArgsSchema"
import { TrainingLogFindManyArgsSchema } from "../outputTypeSchemas/TrainingLogFindManyArgsSchema"
import { AuthUserCountOutputTypeArgsSchema } from "../outputTypeSchemas/AuthUserCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuthUserSelectSchema: z.ZodType<Prisma.AuthUserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  first_name: z.boolean().optional(),
  last_name: z.boolean().optional(),
  role: z.boolean().optional(),
  auth_session: z.union([z.boolean(),z.lazy(() => AuthSessionFindManyArgsSchema)]).optional(),
  auth_key: z.union([z.boolean(),z.lazy(() => AuthKeyFindManyArgsSchema)]).optional(),
  dogs: z.union([z.boolean(),z.lazy(() => DogFindManyArgsSchema)]).optional(),
  tricks: z.union([z.boolean(),z.lazy(() => TrickFindManyArgsSchema)]).optional(),
  TrainingLog: z.union([z.boolean(),z.lazy(() => TrainingLogFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AuthUserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AuthUserFindManyArgsSchema: z.ZodType<Prisma.AuthUserFindManyArgs> = z.object({
  select: AuthUserSelectSchema.optional(),
  include: AuthUserIncludeSchema.optional(),
  where: AuthUserWhereInputSchema.optional(),
  orderBy: z.union([ AuthUserOrderByWithRelationInputSchema.array(),AuthUserOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuthUserScalarFieldEnumSchema,AuthUserScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default AuthUserFindManyArgsSchema;
