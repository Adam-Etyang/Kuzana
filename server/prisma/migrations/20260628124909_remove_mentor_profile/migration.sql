/*
  Warnings:

  - You are about to drop the `MentorProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MentorProfile" DROP CONSTRAINT "MentorProfile_userId_fkey";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "currentMentees" INTEGER DEFAULT 0,
ADD COLUMN     "isAvailable" BOOLEAN DEFAULT true,
ADD COLUMN     "maxMentees" INTEGER DEFAULT 31;

-- DropTable
DROP TABLE "MentorProfile";
