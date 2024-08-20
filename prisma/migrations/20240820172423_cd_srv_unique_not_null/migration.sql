/*
  Warnings:

  - A unique constraint covering the columns `[Cd_Srv]` on the table `Service2` will be added. If there are existing duplicate values, this will fail.
  - Made the column `Cd_Srv` on table `Service2` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Service2" ALTER COLUMN "Cd_Srv" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Service2_Cd_Srv_key" ON "Service2"("Cd_Srv");
