/*
  Warnings:

  - A unique constraint covering the columns `[C_ID]` on the table `TicketInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TicketInfo_C_ID_key" ON "TicketInfo"("C_ID");
