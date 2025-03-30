/*
  Warnings:

  - Added the required column `isDeleted` to the `Cases` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdById" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "priority" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Cases_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cases" ("createdAt", "createdById", "description", "id", "priority", "status", "title", "type", "updatedAt") SELECT "createdAt", "createdById", "description", "id", "priority", "status", "title", "type", "updatedAt" FROM "Cases";
DROP TABLE "Cases";
ALTER TABLE "new_Cases" RENAME TO "Cases";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
