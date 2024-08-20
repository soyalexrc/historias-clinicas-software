/*
  Warnings:

  - Added the required column `C_COD_COMERCIAL_PROD_SERV` to the `TicketInfoDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `C_COD_PROD_SERV_ITEM` to the `TicketInfoDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `C_INDICADOR_PS_ITEM` to the `TicketInfoDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `C_PRECIO_VENTA_UNITARIO_ITEM` to the `TicketInfoDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `C_TOTAL_ITEM` to the `TicketInfoDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `C_VALOR_ITEM` to the `TicketInfoDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TicketInfoDetail" ADD COLUMN     "C_COD_COMERCIAL_PROD_SERV" TEXT NOT NULL,
ADD COLUMN     "C_COD_PROD_SERV_ITEM" TEXT NOT NULL,
ADD COLUMN     "C_INDICADOR_PS_ITEM" TEXT NOT NULL,
ADD COLUMN     "C_PRECIO_VENTA_UNITARIO_ITEM" INTEGER NOT NULL,
ADD COLUMN     "C_TOTAL_ITEM" INTEGER NOT NULL,
ADD COLUMN     "C_VALOR_ITEM" INTEGER NOT NULL;
