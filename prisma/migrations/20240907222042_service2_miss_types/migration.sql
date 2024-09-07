/*
  Warnings:

  - The `Estado` column on the `Cliente2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `Estado` column on the `Service2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `IB_LF` column on the `Service2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `IB_ActivoFijo` column on the `Service2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `C_IB_LC` column on the `Service2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `C_IB_SOBRE_TASA` column on the `Service2` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Cliente2" DROP COLUMN "Estado",
ADD COLUMN     "Estado" BOOLEAN;

-- AlterTable
ALTER TABLE "Service2" DROP COLUMN "Estado",
ADD COLUMN     "Estado" BOOLEAN,
DROP COLUMN "IB_LF",
ADD COLUMN     "IB_LF" BOOLEAN,
DROP COLUMN "IB_ActivoFijo",
ADD COLUMN     "IB_ActivoFijo" BOOLEAN,
DROP COLUMN "C_IB_LC",
ADD COLUMN     "C_IB_LC" BOOLEAN,
DROP COLUMN "C_IB_SOBRE_TASA",
ADD COLUMN     "C_IB_SOBRE_TASA" BOOLEAN;
