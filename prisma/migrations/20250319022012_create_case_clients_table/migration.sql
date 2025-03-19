-- CreateTable
CREATE TABLE "CaseClients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "casesId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "CaseClients_casesId_fkey" FOREIGN KEY ("casesId") REFERENCES "Cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
