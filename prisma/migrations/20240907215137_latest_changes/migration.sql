/*
  Warnings:

  - The `Estado` column on the `Cliente2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `IB_AgRet` column on the `Cliente2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `IB_AgPercep` column on the `Cliente2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `IB_BuenContrib` column on the `Cliente2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `EsExtranjero` column on the `Cliente2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `DefinirDiasCredito` column on the `Cliente2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `IB_ConsumidorFinal` column on the `Cliente2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `C_IB_PAGO_DESTINO` column on the `Cliente2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `C_IB_AGENTE` column on the `Cliente2` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Cliente2" DROP COLUMN "Estado",
ADD COLUMN     "Estado" INTEGER,
DROP COLUMN "IB_AgRet",
ADD COLUMN     "IB_AgRet" INTEGER,
DROP COLUMN "IB_AgPercep",
ADD COLUMN     "IB_AgPercep" INTEGER,
DROP COLUMN "IB_BuenContrib",
ADD COLUMN     "IB_BuenContrib" INTEGER,
DROP COLUMN "EsExtranjero",
ADD COLUMN     "EsExtranjero" INTEGER,
DROP COLUMN "DefinirDiasCredito",
ADD COLUMN     "DefinirDiasCredito" INTEGER,
DROP COLUMN "IB_ConsumidorFinal",
ADD COLUMN     "IB_ConsumidorFinal" INTEGER,
DROP COLUMN "C_IB_PAGO_DESTINO",
ADD COLUMN     "C_IB_PAGO_DESTINO" INTEGER,
DROP COLUMN "C_IB_AGENTE",
ADD COLUMN     "C_IB_AGENTE" INTEGER;
