/*
  Warnings:

  - Made the column `porcentajeReplica` on table `MEME` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `MEME` ADD COLUMN `autor` VARCHAR(191),
    MODIFY `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `porcentajeReplica` DOUBLE NOT NULL;
