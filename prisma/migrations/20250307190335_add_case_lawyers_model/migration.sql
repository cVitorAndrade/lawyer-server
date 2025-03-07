-- CreateTable
CREATE TABLE "CaseLawyers" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    CONSTRAINT "CaseLawyers_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Cases" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CaseLawyers_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "CaseLawyers_id_key" ON "CaseLawyers"("id");
