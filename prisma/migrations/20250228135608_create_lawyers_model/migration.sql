-- CreateTable
CREATE TABLE "Lawyers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "telephone" TEXT,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Lawyers_username_key" ON "Lawyers"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Lawyers_email_key" ON "Lawyers"("email");
