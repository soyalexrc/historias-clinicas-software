/*
  Warnings:

  - You are about to drop the column `NCoto` on the `Service2` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Service2" DROP COLUMN "NCoto",
ADD COLUMN     "NCorto" TEXT;
