import { Controller, Get, HttpCode, BadRequestException, InternalServerErrorException, Req, Res } from '@nestjs/common';
import path from 'path/posix';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('texto')
  @HttpCode(200)
  HolaTexto(): string {
    return 'Hola Texto';
  }
  @Get('html')
  @HttpCode(201)
  HolaHtml(): string {
    return '<h1>Hola HTML</h1>';
  }
  
  @Get('json')
  @HttpCode(200)
  HolaJson(): string {
    return '{mensaje:"Hola json"}';
  }
  @Get('bad-request')
  badRequest(){
    throw new BadRequestException();
  }
  @Get('internal-error')
  internalError(){
    throw new InternalServerErrorException();
  }

  @Get('setear-cookie-insegura')
  setearCookieInsegura(
    @Req() req, // request - PETICION
    @Res() res, // response - RESPUESTA
  ){
    res.cookie(
      'galletaInsegura', // nombre
      'Tengo hambre', // valor
    );
    res.cookie(
      'galletaSegura', //nombre
      'Web:3', // valor
      {
        secure: true,
      },
    );

    res.send('ok');//return de antes

  }

  @Get('mostrar-cookies')
  mostrarCookies(@Req() req){
    const mensaje ={
      sinFirmar:req.cookies,
      firmar: req.signedCookies,
    };
    return mensaje;
  }
}
