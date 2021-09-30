import { Prisma } from ".prisma/client";
import { PrismaService } from "src/Prisma.service";
export declare class MemeService {
    private prisma;
    constructor(prisma: PrismaService);
    buscarMuchos(parametrosBusqueda: {
        skip?: number;
        take?: number;
        busqueda?: string;
    }): import(".prisma/client").PrismaPromise<import(".prisma/client").MEME[]>;
    buscarUno(id: number): Prisma.Prisma__MEMEClient<import(".prisma/client").MEME>;
    crearUno(usuario: Prisma.MEMECreateInput): Prisma.Prisma__MEMEClient<import(".prisma/client").MEME>;
    actualizarUno(parametrosActualizar: {
        id: number;
        data: Prisma.MEMEUpdateInput;
    }): Prisma.Prisma__MEMEClient<import(".prisma/client").MEME>;
    eliminarUno(id: number): Prisma.Prisma__MEMEClient<import(".prisma/client").MEME>;
}
