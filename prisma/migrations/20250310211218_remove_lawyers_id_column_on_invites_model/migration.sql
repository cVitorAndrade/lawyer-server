/*
  Warnings:

  - You are about to drop the column `lawyersId` on the `Invites` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Invites" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "caseId" TEXT NOT NULL,
    "invitedById" TEXT NOT NULL,
    "invitedId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "respondedAt" DATETIME,
    CONSTRAINT "Invites_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Invites_invitedId_fkey" FOREIGN KEY ("invitedId") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Invites_invitedById_fkey" FOREIGN KEY ("invitedById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Invites" ("caseId", "createdAt", "id", "invitedById", "invitedId", "respondedAt", "status") SELECT "caseId", "createdAt", "id", "invitedById", "invitedId", "respondedAt", "status" FROM "Invites";
DROP TABLE "Invites";
ALTER TABLE "new_Invites" RENAME TO "Invites";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
