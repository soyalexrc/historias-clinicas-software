/*
  Warnings:

  - The `C_IB_CRM` column on the `Service2` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Service2" DROP COLUMN "C_IB_CRM",
ADD COLUMN     "C_IB_CRM" BOOLEAN;
