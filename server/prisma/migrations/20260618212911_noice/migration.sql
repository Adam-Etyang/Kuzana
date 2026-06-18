/*
  Warnings:

  - The values [FACULTY_MENTOR] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('MENTOR', 'MENTEE', 'ADMIN');
ALTER TABLE "public"."User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'MENTEE';
COMMIT;

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "yearOfStudy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "institutionRole" DROP NOT NULL;
