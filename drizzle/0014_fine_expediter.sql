CREATE TABLE IF NOT EXISTS "trick_to_logs" (
	"tid" text NOT NULL,
	"lid" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "trick_to_logs" ADD CONSTRAINT "trick_to_logs_lid_tid" PRIMARY KEY("lid","tid");

DO $$ BEGIN
 ALTER TABLE "trick_to_logs" ADD CONSTRAINT "trick_to_logs_tid_trick_id_fk" FOREIGN KEY ("tid") REFERENCES "trick"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "trick_to_logs" ADD CONSTRAINT "trick_to_logs_lid_training_logs_id_fk" FOREIGN KEY ("lid") REFERENCES "training_logs"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
