/*
  Warnings:

  - The primary key for the `Patient` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Patient_pkey" PRIMARY KEY ("id");
