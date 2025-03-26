/*
  Warnings:

  - You are about to drop the `DocumentModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DocumentModel";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "DocumentModels" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ownerId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "DocumentModels_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DocumentModelFiles" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "documentModelId" TEXT NOT NULL,
    "uploadeById" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "fullpath" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "originalname" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "DocumentModelFiles_documentModelId_fkey" FOREIGN KEY ("documentModelId") REFERENCES "DocumentModels" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "DocumentModelFiles_uploadeById_fkey" FOREIGN KEY ("uploadeById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DocumentModelFiles" ("createdAt", "documentModelId", "fullpath", "id", "mimetype", "originalname", "path", "size", "uploadeById") SELECT "createdAt", "documentModelId", "fullpath", "id", "mimetype", "originalname", "path", "size", "uploadeById" FROM "DocumentModelFiles";
DROP TABLE "DocumentModelFiles";
ALTER TABLE "new_DocumentModelFiles" RENAME TO "DocumentModelFiles";
CREATE UNIQUE INDEX "DocumentModelFiles_path_key" ON "DocumentModelFiles"("path");
CREATE UNIQUE INDEX "DocumentModelFiles_fullpath_key" ON "DocumentModelFiles"("fullpath");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
