/*
  Warnings:

  - You are about to drop the column `date` on the `Blogs` table. All the data in the column will be lost.
  - Added the required column `shortDesc` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blogs" DROP COLUMN "date";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "shortDesc" VARCHAR(500) NOT NULL;
