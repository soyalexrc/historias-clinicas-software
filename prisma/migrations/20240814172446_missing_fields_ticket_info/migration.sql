/*
  Warnings:

  - Added the required column `C_RUCE` to the `TicketInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `C_TIP_DOC_ADQUIRIENTE` to the `TicketInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `C_TOTAL_OPERACIONES_GRAV` to the `TicketInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TicketInfo" ADD COLUMN     "C_RUCE" TEXT NOT NULL,
ADD COLUMN     "C_TIP_DOC_ADQUIRIENTE" TEXT NOT NULL,
ADD COLUMN     "C_TOTAL_OPERACIONES_GRAV" INTEGER NOT NULL;
