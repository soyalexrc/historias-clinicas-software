-- CreateEnum
CREATE TYPE "ManualSearchStatus" AS ENUM ('PENDING', 'NOT_FOUND');

-- CreateTable
CREATE TABLE "ManualSearch" (
    "id" SERIAL NOT NULL,
    "C_ID" TEXT NOT NULL,
    "dateConsulted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "ManualSearchStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "ManualSearch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ManualSearch_C_ID_key" ON "ManualSearch"("C_ID");
