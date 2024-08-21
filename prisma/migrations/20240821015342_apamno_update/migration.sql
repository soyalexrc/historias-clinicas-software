/*
  Warnings:

  - You are about to drop the column `C_APAMINO_RAZON_SOCIAL_ADQUIRIENTE` on the `TicketInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TicketInfo" DROP COLUMN "C_APAMINO_RAZON_SOCIAL_ADQUIRIENTE",
ADD COLUMN     "C_APAMNO_RAZON_SOCIAL_ADQUIRIENTE" TEXT;
