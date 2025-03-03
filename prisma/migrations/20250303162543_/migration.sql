/*
  Warnings:

  - A unique constraint covering the columns `[path]` on the table `CaseUploads` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fullpath]` on the table `CaseUploads` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CaseUploads_path_key" ON "CaseUploads"("path");

-- CreateIndex
CREATE UNIQUE INDEX "CaseUploads_fullpath_key" ON "CaseUploads"("fullpath");
