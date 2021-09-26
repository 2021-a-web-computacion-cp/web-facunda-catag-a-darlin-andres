import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


//Descorador -> Funciones 
@Module({
  imports: [ // Modulos importados

  ],
  controllers: [//Controladores de este modulo
    AppController
  ],
  providers: [// servicios de este modulo
    AppService
  ],
  exports: [// servicios EXPORTADOS (que se pueden usar fuera de este modulo)
    AppService
  ]
})
export class AppModule {}
