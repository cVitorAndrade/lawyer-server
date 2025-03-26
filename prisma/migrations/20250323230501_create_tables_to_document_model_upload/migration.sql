-- CreateTable
CREATE TABLE "DocumentModel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ownerId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "DocumentModel_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DocumentModelFiles" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "documentModelId" TEXT NOT NULL,
    "uploadeById" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "fullpath" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "originalname" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "DocumentModelFiles_documentModelId_fkey" FOREIGN KEY ("documentModelId") REFERENCES "DocumentModel" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "DocumentModelFiles_uploadeById_fkey" FOREIGN KEY ("uploadeById") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "DocumentModelFiles_path_key" ON "DocumentModelFiles"("path");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentModelFiles_fullpath_key" ON "DocumentModelFiles"("fullpath");
