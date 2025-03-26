/*
  Warnings:

  - You are about to drop the column `uploadeById` on the `DocumentModelFiles` table. All the data in the column will be lost.
  - Added the required column `uploadedById` to the `DocumentModelFiles` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DocumentModelFiles" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "documentModelId" TEXT NOT NULL,
    "uploadedById" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "fullpath" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "originalname" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "DocumentModelFiles_documentModelId_fkey" FOREIGN KEY ("documentModelId") REFERENCES "DocumentModels" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "DocumentModelFiles_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DocumentModelFiles" ("createdAt", "documentModelId", "fullpath", "id", "mimetype", "originalname", "path", "size") SELECT "createdAt", "documentModelId", "fullpath", "id", "mimetype", "originalname", "path", "size" FROM "DocumentModelFiles";
DROP TABLE "DocumentModelFiles";
ALTER TABLE "new_DocumentModelFiles" RENAME TO "DocumentModelFiles";
CREATE UNIQUE INDEX "DocumentModelFiles_path_key" ON "DocumentModelFiles"("path");
CREATE UNIQUE INDEX "DocumentModelFiles_fullpath_key" ON "DocumentModelFiles"("fullpath");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
