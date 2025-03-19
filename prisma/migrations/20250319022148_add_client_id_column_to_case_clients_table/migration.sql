/*
  Warnings:

  - Added the required column `clientsId` to the `CaseClients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CaseClients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "casesId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "clientsId" TEXT NOT NULL,
    CONSTRAINT "CaseClients_clientsId_fkey" FOREIGN KEY ("clientsId") REFERENCES "Clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CaseClients_casesId_fkey" FOREIGN KEY ("casesId") REFERENCES "Cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CaseClients" ("casesId", "createdAt", "id") SELECT "casesId", "createdAt", "id" FROM "CaseClients";
DROP TABLE "CaseClients";
ALTER TABLE "new_CaseClients" RENAME TO "CaseClients";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
