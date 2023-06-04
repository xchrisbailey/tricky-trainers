import { relations, type InferModel } from 'drizzle-orm';
import { pgTable, bigint, varchar, boolean, text, uuid, integer } from 'drizzle-orm/pg-core';

export const user = pgTable('auth_user', {
  id: varchar('id', {
    length: 15 // change this when using custom user ids
  }).primaryKey(),
  // other user attributes
  email: text('email').notNull()
});

export type User = InferModel<typeof user>;

export const session = pgTable('auth_session', {
  id: varchar('id', {
    length: 128
  }).primaryKey(),
  userId: varchar('user_id', {
    length: 15
  })
    .notNull()
    .references(() => user.id),
  activeExpires: bigint('active_expires', {
    mode: 'number'
  }).notNull(),
  idleExpires: bigint('idle_expires', {
    mode: 'number'
  }).notNull()
});

export const key = pgTable('auth_key', {
  id: varchar('id', {
    length: 255
  }).primaryKey(),
  userId: varchar('user_id', {
    length: 15
  })
    .notNull()
    .references(() => user.id),
  primaryKey: boolean('primary_key').notNull(),
  hashedPassword: varchar('hashed_password', {
    length: 255
  }),
  expires: bigint('expires', {
    mode: 'number'
  })
});

export const dog = pgTable('dogs', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  breed: text('breed').notNull(),
  age_years: integer('ageYears').notNull(),
  age_months: integer('ageMonths').notNull(),
  uid: text('uid')
});

export type Dog = InferModel<typeof dog>;
export type NewDog = InferModel<typeof dog, 'insert'>;

export const userRelations = relations(user, ({ many }) => ({
  dogs: many(dog)
}));
