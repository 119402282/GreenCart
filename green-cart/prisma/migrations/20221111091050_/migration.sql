/*
  Warnings:

  - Changed the type of `offsetType` on the `CarbonOrder` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "offsetType" AS ENUM ('tree', 'wind', 'solar', 'methaneDestruction', 'carbonSequestration');

-- AlterTable
ALTER TABLE "CarbonOrder" DROP COLUMN "offsetType",
ADD COLUMN     "offsetType" "offsetType" NOT NULL;

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "prefferdOffset" "offsetType" NOT NULL DEFAULT 'tree';

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "prefferdOffset" "offsetType" NOT NULL DEFAULT 'tree';
