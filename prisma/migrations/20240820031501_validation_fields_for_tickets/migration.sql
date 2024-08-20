-- AlterTable
ALTER TABLE "TicketInfo" ADD COLUMN     "isValidated" BOOLEAN,
ADD COLUMN     "validatesDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "valitadedBy" TEXT;
