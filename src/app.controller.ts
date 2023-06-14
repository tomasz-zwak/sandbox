import { Lol } from '@app/lol.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createLol(@Body() { content }: { content: string }) {
    return Lol.create({ content }).save();
  }
}
