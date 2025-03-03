/*
  Warnings:

  - Added the required column `mimetype` to the `CaseFiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originalname` to the `CaseFiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `CaseFiles` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CaseFiles" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "caseId" TEXT NOT NULL,
    "uploadedById" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "fullpath" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "originalname" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "CaseFiles_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CaseFiles_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CaseFiles" ("caseId", "createdAt", "fullpath", "id", "path", "uploadedById") SELECT "caseId", "createdAt", "fullpath", "id", "path", "uploadedById" FROM "CaseFiles";
DROP TABLE "CaseFiles";
ALTER TABLE "new_CaseFiles" RENAME TO "CaseFiles";
CREATE UNIQUE INDEX "CaseFiles_path_key" ON "CaseFiles"("path");
CREATE UNIQUE INDEX "CaseFiles_fullpath_key" ON "CaseFiles"("fullpath");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
