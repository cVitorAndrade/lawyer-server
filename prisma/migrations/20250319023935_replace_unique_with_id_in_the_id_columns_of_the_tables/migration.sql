-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Addresses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Addresses" ("city", "complement", "country", "createdAt", "id", "name", "neighborhood", "number", "ownerId", "postalCode", "state", "street", "updatedAt") SELECT "city", "complement", "country", "createdAt", "id", "name", "neighborhood", "number", "ownerId", "postalCode", "state", "street", "updatedAt" FROM "Addresses";
DROP TABLE "Addresses";
ALTER TABLE "new_Addresses" RENAME TO "Addresses";
CREATE TABLE "new_CaseLawyers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "caseId" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "CaseLawyers_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CaseLawyers_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CaseLawyers" ("caseId", "createdAt", "id", "lawyerId") SELECT "caseId", "createdAt", "id", "lawyerId" FROM "CaseLawyers";
DROP TABLE "CaseLawyers";
ALTER TABLE "new_CaseLawyers" RENAME TO "CaseLawyers";
CREATE TABLE "new_Clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdById" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Clients_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Clients" ("birthDate", "createdAt", "createdById", "email", "id", "name", "telephone", "updatedAt") SELECT "birthDate", "createdAt", "createdById", "email", "id", "name", "telephone", "updatedAt" FROM "Clients";
DROP TABLE "Clients";
ALTER TABLE "new_Clients" RENAME TO "Clients";
CREATE UNIQUE INDEX "Clients_email_key" ON "Clients"("email");
CREATE TABLE "new_Notifications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lawyerId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "details" JSONB NOT NULL,
    "isRead" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "Notifications_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Notifications" ("createdAt", "details", "id", "isRead", "lawyerId", "message", "type") SELECT "createdAt", "details", "id", "isRead", "lawyerId", "message", "type" FROM "Notifications";
DROP TABLE "Notifications";
ALTER TABLE "new_Notifications" RENAME TO "Notifications";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
