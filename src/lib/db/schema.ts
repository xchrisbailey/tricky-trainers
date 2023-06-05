import { relations, type InferModel } from 'drizzle-orm';
import { pgTable, bigint, varchar, boolean, text, uuid, integer } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const user = pgTable('auth_user', {
  id: varchar('id', {
    length: 15 // change this when using custom user ids
  }).primaryKey(),
  // other user attributes
  email: text('email').notNull(),
  first_name: text('first_name').notNull(),
  last_name: text('last_name').notNull()
});

export const userRelations = relations(user, ({ many }) => ({
  dogs: many(dog)
}));

export type User = InferModel<typeof user, 'select'>;
export const insert_user_schema = createInsertSchema(user);

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
    .notNull()
    .references(() => user.id)
});

export const dogsRelations = relations(dog, ({ one }) => ({
  owner: one(user, { fields: [dog.uid], references: [user.id] })
}));

export type Dog = InferModel<typeof dog, 'select'>;
export type NewDog = InferModel<typeof dog, 'insert'>;
export const insert_dog_schema = createInsertSchema(dog);
