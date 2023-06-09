CREATE TABLE IF NOT EXISTS "training_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
);

ALTER TABLE "dogs" ADD COLUMN "training_log" text;