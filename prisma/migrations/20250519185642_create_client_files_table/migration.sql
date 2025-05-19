/*
  Warnings:

  - You are about to drop the `ClientFile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ClientFile";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ClientFiles" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientId" TEXT NOT NULL,
    "uploadedById" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "fullpath" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "originalname" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "ClientFiles_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ClientFiles_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ClientFiles_path_key" ON "ClientFiles"("path");

-- CreateIndex
CREATE UNIQUE INDEX "ClientFiles_fullpath_key" ON "ClientFiles"("fullpath");
