-- CreateTable
CREATE TABLE "Blogs" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "author" TEXT NOT NULL,
    "tags" TEXT NOT NULL,

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("id")
);
