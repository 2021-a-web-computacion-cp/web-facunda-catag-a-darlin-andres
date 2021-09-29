import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './Prisma.service';
import { UsuarioModulo } from './usuario/usuario.module';


//Descorador -> Funciones 
@Module({
  imports: [ // Modulos importados
    UsuarioModulo,
  ],
  controllers: [//Controladores de este modulo
    AppController,
  ],
  providers: [// servicios de este modulo
    AppService,
    PrismaService,
  ],
  exports: [// servicios EXPORTADOS (que se pueden usar fuera de este modulo)
    AppService,
  ]
})
export class AppModule {}
