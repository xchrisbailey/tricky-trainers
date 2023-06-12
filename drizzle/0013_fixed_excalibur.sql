ALTER TABLE "trick" ALTER COLUMN "name" SET NOT NULL;
ALTER TABLE "trick" ADD COLUMN "description" text NOT NULL;
ALTER TABLE "trick" ADD COLUMN "example" text NOT NULL;
ALTER TABLE "trick" ADD COLUMN "difficulty" integer DEFAULT 0;