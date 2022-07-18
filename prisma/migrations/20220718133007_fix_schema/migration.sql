/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `wifis` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "wifis_userId_title_key" ON "wifis"("userId", "title");
