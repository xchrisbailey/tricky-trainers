ALTER TABLE "training_logs" ADD COLUMN "did" text NOT NULL;
ALTER TABLE "dogs" DROP COLUMN IF EXISTS "training_log";