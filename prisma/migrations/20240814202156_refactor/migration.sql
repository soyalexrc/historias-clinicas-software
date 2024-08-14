/*
  Warnings:

  - Changed the type of `C_ID_ITEM` on the `TicketInfoDetail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "TicketInfoDetail" DROP COLUMN "C_ID_ITEM",
ADD COLUMN     "C_ID_ITEM" INTEGER NOT NULL;
