/*
  Warnings:

  - You are about to drop the column `validatesDate` on the `TicketInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TicketInfo" DROP COLUMN "validatesDate",
ADD COLUMN     "validatedDate" TIMESTAMP(3);
