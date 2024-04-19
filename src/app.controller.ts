import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorators/ip.decorator';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configServiver: ConfigService,
  ) {}

  private readonly logger = new Logger(AppController.name);

  @Get()
  getHello(@Ip() ip: string): string {
    // console.log(ip);
    console.log(this.configServiver.get<string>('ENVIPONMENT'));
    return this.appService.getHello();
    //throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
  }

  // @Get('name/:name')
  // getName(
  //   @Param('name') name: string
  // ): string {
  //   return `${name} hello`;
  // }

  @Get('name')
  getName(@Query('name') name: string): string {
    return `${name} hello`;
  }
}
