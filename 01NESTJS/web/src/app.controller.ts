import { Controller, Get, HttpCode, BadRequestException, InternalServerErrorException } from '@nestjs/common';
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

}
