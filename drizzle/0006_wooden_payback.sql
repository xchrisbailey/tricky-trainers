ALTER TABLE "dogs" ALTER COLUMN "uid" SET NOT NULL;
DO $$ BEGIN
 ALTER TABLE "dogs" ADD CONSTRAINT "dogs_uid_auth_user_id_fk" FOREIGN KEY ("uid") REFERENCES "auth_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
