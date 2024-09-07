/*
  Warnings:

  - The `Estado` column on the `Cliente2` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Cliente2" DROP COLUMN "Estado",
ADD COLUMN     "Estado" INTEGER;
