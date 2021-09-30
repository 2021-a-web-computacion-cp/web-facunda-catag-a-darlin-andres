import { Module } from "@nestjs/common";
import { PrismaService } from "src/Prisma.service";
import { MemeController } from "./meme.controller";
import { MemeService } from "./meme.service";



@Module( {
    imports:[
        //modulois importados
    ],
    providers:[
        // declaramos servicio
        MemeService,
        PrismaService,
    ],
    exports:[
        // exportamos servicio
        MemeService,
    ],
    controllers:[
        // declaramos controladores
        MemeController,
    ],
}


)
export class MemeModulo {}