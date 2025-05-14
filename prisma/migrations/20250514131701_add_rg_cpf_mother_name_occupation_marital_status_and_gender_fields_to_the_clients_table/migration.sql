/*
  Warnings:

  - Added the required column `cpf` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maritalStatus` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motherName` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occupation` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `Clients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdById" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Clients_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Clients" ("birthDate", "createdAt", "createdById", "email", "id", "name", "telephone", "updatedAt") SELECT "birthDate", "createdAt", "createdById", "email", "id", "name", "telephone", "updatedAt" FROM "Clients";
DROP TABLE "Clients";
ALTER TABLE "new_Clients" RENAME TO "Clients";
CREATE UNIQUE INDEX "Clients_email_key" ON "Clients"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
