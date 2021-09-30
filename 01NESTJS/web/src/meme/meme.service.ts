import { Prisma } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/Prisma.service";

@Injectable()
export class MemeService {
    constructor(// Inyectar dependencias
        private prisma: PrismaService) {
        
    }
    buscarMuchos(
        parametrosBusqueda: { 
            skip?: number; 
            take?: number; 
            busqueda?: string; 
            // orderBy?: Prisma.EPN_UsuarioOrder; 
        }) { 
            const or = parametrosBusqueda.busqueda ? { 
                OR: [ 
                    { titulo: { contains: parametrosBusqueda.busqueda } }, 
                    { autor: { contains: parametrosBusqueda.busqueda } }, 
                ], 
            } : {}; 
            return this.prisma.mEME.findMany({ 
                where: or, 
                take: Number(parametrosBusqueda.take) || undefined, 
                skip: Number(parametrosBusqueda.skip) || undefined, 
            }); 
        }

    buscarUno(id: number){
        return this.prisma.mEME.findUnique({
            where: {
                id: id,
            },
        });
    }
    crearUno(meme: Prisma.MEMECreateInput){
        return this.prisma.mEME.create({
            data:meme,
        });
    }
    actualizarUno(parametrosActualizar: {
        id: number;
        data: Prisma.MEMEUpdateInput;
        }) {
        return this.prisma.mEME.update({
        data: parametrosActualizar.data,
        where: {
        id: parametrosActualizar.id,
        },
        });
    }
    eliminarUno(id: number) {
        return this.prisma.mEME.delete({
        where: { id: id },
        });
    }
}