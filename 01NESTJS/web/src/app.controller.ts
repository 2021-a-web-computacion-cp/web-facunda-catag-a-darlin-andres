import { BadRequestException, Controller, Get, InternalServerErrorException } from '@nestjs/common';
import path from 'path/posix';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
}
