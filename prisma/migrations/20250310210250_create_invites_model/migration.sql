-- CreateTable
CREATE TABLE "Invites" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "caseId" TEXT NOT NULL,
    "invitedById" TEXT NOT NULL,
    "invitedId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "respondedAt" DATETIME,
    "lawyersId" TEXT,
    CONSTRAINT "Invites_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Invites_invitedId_fkey" FOREIGN KEY ("invitedId") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Invites_invitedById_fkey" FOREIGN KEY ("invitedById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Invites_lawyersId_fkey" FOREIGN KEY ("lawyersId") REFERENCES "Lawyers" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
