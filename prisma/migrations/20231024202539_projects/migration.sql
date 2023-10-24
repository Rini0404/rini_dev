-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "thumbnail" VARCHAR(500),
    "url" VARCHAR(500) NOT NULL,
    "tags" VARCHAR(500) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
