import { Controller, Get, HttpCode,Headers, BadRequestException, InternalServerErrorException, Req, Res, Header, Query, Param, Post, Body } from '@nestjs/common';
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
      'galletaSeguraYFrimada', //nombre
      'Web:3', // valor
      {
        secure: true, // solo se transfiera por canales confiables https
        signed: true, //Encriptacion
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
    // req.signedCookies.total  //si esta existe
    return mensaje;
  }

  @Get('parametros-consulta/:nombre/:apellido')
  @HttpCode(200)
  @Header('Cache-Control', 'none') // Cabecera de respuesta (response headers)
  @Header('EPN', 'SISTEMAS') // Cabecera de respuesta (response headers)
  parametrosConsulta(
    @Query() queryParams,
    @Param() params,
  ){
    return{
      parametrosConsulta: queryParams,
      parametrosRuta: params,
    };
  }

  @Post('parametros-cuerpo')// 201
  @HttpCode(200)
  parametrosCuerpo(
    @Body() bodyParams,
    @Headers() cabecerasPeticion,
  ){
    return{
      parametrosCuerpo: bodyParams,
      cabeceras: cabecerasPeticion,
    };
  }

}
