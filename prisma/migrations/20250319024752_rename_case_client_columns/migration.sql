/*
  Warnings:

  - You are about to drop the column `casesId` on the `CaseClients` table. All the data in the column will be lost.
  - You are about to drop the column `clientsId` on the `CaseClients` table. All the data in the column will be lost.
  - Added the required column `caseId` to the `CaseClients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `CaseClients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CaseClients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "caseId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "CaseClients_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CaseClients_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CaseClients" ("createdAt", "id") SELECT "createdAt", "id" FROM "CaseClients";
DROP TABLE "CaseClients";
ALTER TABLE "new_CaseClients" RENAME TO "CaseClients";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
