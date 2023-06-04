CREATE TABLE IF NOT EXISTS "dogs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"breed" text NOT NULL,
	"age" integer NOT NULL
);
