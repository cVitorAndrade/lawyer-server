/*
  Warnings:

  - Added the required column `color` to the `DocumentModels` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DocumentModels" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ownerId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "DocumentModels_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DocumentModels" ("createdAt", "description", "id", "ownerId", "title") SELECT "createdAt", "description", "id", "ownerId", "title" FROM "DocumentModels";
DROP TABLE "DocumentModels";
ALTER TABLE "new_DocumentModels" RENAME TO "DocumentModels";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
