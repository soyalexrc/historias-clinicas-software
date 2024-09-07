/*
  Warnings:

  - The `C_IB_ES_OBLIGATORIO` column on the `Service2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `C_IB_INCLUYE_IGV` column on the `Service2` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Service2" DROP COLUMN "C_IB_ES_OBLIGATORIO",
ADD COLUMN     "C_IB_ES_OBLIGATORIO" BOOLEAN,
DROP COLUMN "C_IB_INCLUYE_IGV",
ADD COLUMN     "C_IB_INCLUYE_IGV" BOOLEAN;
