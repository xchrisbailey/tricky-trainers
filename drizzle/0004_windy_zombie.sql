ALTER TABLE "dogs" RENAME COLUMN "age" TO "ageYears";
ALTER TABLE "auth_user" ALTER COLUMN "email" SET NOT NULL;
ALTER TABLE "dogs" ADD COLUMN "ageMonths" integer NOT NULL;