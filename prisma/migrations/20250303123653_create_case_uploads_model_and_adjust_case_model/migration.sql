/*
  Warnings:

  - You are about to drop the column `lawyersId` on the `Cases` table. All the data in the column will be lost.
  - Added the required column `createdById` to the `Cases` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "CaseUploads" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "caseId" TEXT NOT NULL,
    "uploadedById" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "fullpath" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "CaseUploads_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CaseUploads_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Cases_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cases" ("createdAt", "description", "id", "priority", "status", "title", "type", "updatedAt") SELECT "createdAt", "description", "id", "priority", "status", "title", "type", "updatedAt" FROM "Cases";
DROP TABLE "Cases";
ALTER TABLE "new_Cases" RENAME TO "Cases";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
