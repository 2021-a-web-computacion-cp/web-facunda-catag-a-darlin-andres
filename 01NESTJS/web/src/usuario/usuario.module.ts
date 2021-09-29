import { Module } from "@nestjs/common";
import { PrismaService } from "src/Prisma.service";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";

@Module( {
    imports:[
        //modulois importados
    ],
    providers:[
        // declaramos servicio
        UsuarioService,
        PrismaService,
    ],
    exports:[
        // exportamos servicio
        UsuarioService,
    ],
    controllers:[
        // declaramos controladores
        UsuarioController,
    ],
}


)
export class UsuarioModulo {}