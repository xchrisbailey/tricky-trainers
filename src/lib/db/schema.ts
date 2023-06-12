import { relations, type InferModel } from 'drizzle-orm';
import {
  pgTable,
  bigint,
  varchar,
  boolean,
  text,
  uuid,
  integer,
  primaryKey
} from 'drizzle-orm/pg-core';
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
  flare: text('flare').notNull(),
  breed: text('breed').notNull(),
  age_years: integer('ageYears').notNull(),
  age_months: integer('ageMonths').notNull(),
  uid: text('uid')
    .notNull()
    .references(() => user.id)
});

export const dogsRelations = relations(dog, ({ one }) => ({
  owner: one(user, { fields: [dog.uid], references: [user.id] }),
  training_log: one(training_log, { fields: [dog.id], references: [training_log.id] })
}));

export type Dog = InferModel<typeof dog, 'select'>;
export type NewDog = InferModel<typeof dog, 'insert'>;
export const insert_dog_schema = createInsertSchema(dog);

export const training_log = pgTable('training_logs', {
  id: uuid('id').defaultRandom().primaryKey(),
  did: text('did').notNull()
});

export const training_log_relations = relations(training_log, ({ many }) => ({
  trick_to_logs: many(trick_to_logs)
}));

export type TrainingLog = InferModel<typeof training_log, 'select'>;
export type NewTrainingLog = InferModel<typeof training_log, 'insert'>;
export const NewTrainingLogSchema = createInsertSchema(training_log);

export const trick = pgTable('trick', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  example: text('example').notNull(),
  difficulty: integer('difficulty').default(0)
});

export const trick_relations = relations(trick, ({ many }) => ({
  trick_to_logs: many(trick_to_logs)
}));

export const trick_to_logs = pgTable(
  'trick_to_logs',
  {
    tid: text('tid')
      .notNull()
      .references(() => trick.id),
    lid: text('lid')
      .notNull()
      .references(() => training_log.id)
  },
  table => ({
    pk: primaryKey(table.lid, table.tid)
  })
);

export const trick_to_log_relation = relations(trick_to_logs, ({ one }) => ({
  trick: one(trick, {
    fields: [trick_to_logs.tid],
    references: [trick.id]
  }),
  log: one(training_log, {
    fields: [trick_to_logs.lid],
    references: [training_log.id]
  })
}));
