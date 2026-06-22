/*
  Warnings:

  - You are about to drop the column `institutionRole` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectApplication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectSkill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProjectApplication" DROP CONSTRAINT "ProjectApplication_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectSkill" DROP CONSTRAINT "ProjectSkill_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectSkill" DROP CONSTRAINT "ProjectSkill_skillId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "institutionRole";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "ProjectApplication";

-- DropTable
DROP TABLE "ProjectSkill";

-- DropEnum
DROP TYPE "ApplicationStatus";

-- DropEnum
DROP TYPE "InstitutionRole";

-- DropEnum
DROP TYPE "ProjectStatus";
