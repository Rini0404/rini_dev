/*
  Warnings:

  - You are about to drop the column `author` on the `Blogs` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Blogs` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Blogs` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Blogs` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `Blogs` table. All the data in the column will be lost.
  - Added the required column `thumbnail` to the `Blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blogs" DROP COLUMN "author",
DROP COLUMN "content",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "views",
ADD COLUMN     "thumbnail" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
