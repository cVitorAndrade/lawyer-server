/*
  Warnings:

  - You are about to alter the column `createdAt` on the `CaseLawyers` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CaseLawyers" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "CaseLawyers_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CaseLawyers_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CaseLawyers" ("caseId", "createdAt", "id", "lawyerId") SELECT "caseId", "createdAt", "id", "lawyerId" FROM "CaseLawyers";
DROP TABLE "CaseLawyers";
ALTER TABLE "new_CaseLawyers" RENAME TO "CaseLawyers";
CREATE UNIQUE INDEX "CaseLawyers_id_key" ON "CaseLawyers"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
