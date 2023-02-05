-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarbonOrder" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "offsetPrice" INTEGER NOT NULL,
    "offsetType" TEXT NOT NULL,
    "offsetCarbonKg" BIGINT NOT NULL,
    "customerId" INTEGER,

    CONSTRAINT "CarbonOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarbonOrderItem" (
    "id" SERIAL NOT NULL,
    "productType" TEXT NOT NULL,
    "offsetCost" INTEGER NOT NULL,
    "offsetCarbonKg" BIGINT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "carbonOrderId" INTEGER,

    CONSTRAINT "CarbonOrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "offsetCarbonKg" BIGINT NOT NULL,
    "companyId" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "apiKeyGuarded" TEXT NOT NULL,
    "offsetCarbonKg" BIGINT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- AddForeignKey
ALTER TABLE "CarbonOrder" ADD CONSTRAINT "CarbonOrder_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarbonOrderItem" ADD CONSTRAINT "CarbonOrderItem_carbonOrderId_fkey" FOREIGN KEY ("carbonOrderId") REFERENCES "CarbonOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
