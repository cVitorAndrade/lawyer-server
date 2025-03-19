-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CaseLawyers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "caseId" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "CaseLawyers_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Cases" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CaseLawyers_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CaseLawyers" ("caseId", "createdAt", "id", "lawyerId") SELECT "caseId", "createdAt", "id", "lawyerId" FROM "CaseLawyers";
DROP TABLE "CaseLawyers";
ALTER TABLE "new_CaseLawyers" RENAME TO "CaseLawyers";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
