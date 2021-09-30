-- CreateTable
CREATE TABLE `MEME` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaCreacion` DATETIME(3) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `porcentajeReplica` DOUBLE NOT NULL,
    `longevidad` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
