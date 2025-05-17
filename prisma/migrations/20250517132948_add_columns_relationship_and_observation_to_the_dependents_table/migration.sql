/*
  Warnings:

  - Added the required column `observation` to the `Dependents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relationship` to the `Dependents` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dependents" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "relationship" TEXT NOT NULL,
    "observation" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Dependents_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Dependents" ("birthDate", "clientId", "cpf", "createdAt", "email", "gender", "id", "maritalStatus", "motherName", "name", "occupation", "rg", "telephone", "updatedAt") SELECT "birthDate", "clientId", "cpf", "createdAt", "email", "gender", "id", "maritalStatus", "motherName", "name", "occupation", "rg", "telephone", "updatedAt" FROM "Dependents";
DROP TABLE "Dependents";
ALTER TABLE "new_Dependents" RENAME TO "Dependents";
CREATE UNIQUE INDEX "Dependents_email_key" ON "Dependents"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
