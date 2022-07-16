/*
  Warnings:

  - You are about to drop the `docs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "docs" DROP CONSTRAINT "docs_userId_fkey";

-- DropTable
DROP TABLE "docs";

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "type" "DOC_TYPE" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "documents_number_key" ON "documents"("number");

-- CreateIndex
CREATE UNIQUE INDEX "documents_userId_type_key" ON "documents"("userId", "type");

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
