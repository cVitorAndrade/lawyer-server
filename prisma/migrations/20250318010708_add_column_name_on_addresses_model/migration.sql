/*
  Warnings:

  - Added the required column `name` to the `Addresses` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Addresses" (
    "id" TEXT NOT NULL,
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
INSERT INTO "new_Addresses" ("city", "complement", "country", "createdAt", "id", "neighborhood", "number", "ownerId", "postalCode", "state", "street", "updatedAt") SELECT "city", "complement", "country", "createdAt", "id", "neighborhood", "number", "ownerId", "postalCode", "state", "street", "updatedAt" FROM "Addresses";
DROP TABLE "Addresses";
ALTER TABLE "new_Addresses" RENAME TO "Addresses";
CREATE UNIQUE INDEX "Addresses_id_key" ON "Addresses"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
