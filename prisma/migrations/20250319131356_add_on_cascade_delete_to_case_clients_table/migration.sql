-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CaseClients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "caseId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "CaseClients_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Clients" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CaseClients_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Cases" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CaseClients" ("caseId", "clientId", "createdAt", "id") SELECT "caseId", "clientId", "createdAt", "id" FROM "CaseClients";
DROP TABLE "CaseClients";
ALTER TABLE "new_CaseClients" RENAME TO "CaseClients";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
