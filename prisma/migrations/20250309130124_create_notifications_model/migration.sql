-- CreateTable
CREATE TABLE "Notifications" (
    "id" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "details" JSONB NOT NULL,
    "isRead" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL,
    CONSTRAINT "Notifications_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "Lawyers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Notifications_id_key" ON "Notifications"("id");
