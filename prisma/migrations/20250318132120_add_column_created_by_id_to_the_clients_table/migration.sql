/*
  Warnings:

  - Added the required column `createdById` to the `Clients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Clients" (
    "id" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Clients_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Clients" ("birthDate", "createdAt", "email", "id", "name", "telephone", "updatedAt") SELECT "birthDate", "createdAt", "email", "id", "name", "telephone", "updatedAt" FROM "Clients";
DROP TABLE "Clients";
ALTER TABLE "new_Clients" RENAME TO "Clients";
CREATE UNIQUE INDEX "Clients_id_key" ON "Clients"("id");
CREATE UNIQUE INDEX "Clients_email_key" ON "Clients"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
