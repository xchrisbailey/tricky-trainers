import { z } from 'zod';

export const AuthUserScalarFieldEnumSchema = z.enum(['id', 'email', 'first_name', 'last_name']);
