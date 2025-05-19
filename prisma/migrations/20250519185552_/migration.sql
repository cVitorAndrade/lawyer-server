-- CreateTable
CREATE TABLE "ClientFile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientId" TEXT NOT NULL,
    "uploadedById" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "fullpath" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "originalname" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "ClientFile_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ClientFile_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ClientFile_path_key" ON "ClientFile"("path");

-- CreateIndex
CREATE UNIQUE INDEX "ClientFile_fullpath_key" ON "ClientFile"("fullpath");
