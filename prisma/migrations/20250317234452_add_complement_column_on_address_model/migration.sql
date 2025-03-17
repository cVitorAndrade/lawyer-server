/*
  Warnings:

  - Added the required column `complements` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Address" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complements" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Address" ("city", "country", "createdAt", "id", "neighborhood", "number", "ownerId", "postalCode", "state", "street", "updatedAt") SELECT "city", "country", "createdAt", "id", "neighborhood", "number", "ownerId", "postalCode", "state", "street", "updatedAt" FROM "Address";
DROP TABLE "Address";
ALTER TABLE "new_Address" RENAME TO "Address";
CREATE UNIQUE INDEX "Address_id_key" ON "Address"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
