-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('UPI', 'CASH');

-- CreateTable
CREATE TABLE "Patient" (
    "number" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "address" TEXT,
    "discount" TEXT,
    "paymentmethod" "PaymentMethod" NOT NULL DEFAULT 'UPI',

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("number")
);

-- CreateIndex
CREATE UNIQUE INDEX "Patient_number_key" ON "Patient"("number");
