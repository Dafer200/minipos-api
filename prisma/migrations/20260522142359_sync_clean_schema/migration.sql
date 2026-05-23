/*
  Warnings:

  - You are about to drop the column `departmenttId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the `departmentt` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `departmentId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_departmenttId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "departmenttId",
ADD COLUMN     "departmentId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "departmentt";

-- CreateTable
CREATE TABLE "department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "department_name_key" ON "department"("name");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
