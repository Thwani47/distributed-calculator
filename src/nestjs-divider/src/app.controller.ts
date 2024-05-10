import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DivideRequest, DivideResponse } from './models/divide';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/health")
  checkHealth(): string {
    return this.appService.checkHealth();
  }

  @Post("/divide")
  getQuotient(@Body() request : DivideRequest) : DivideResponse {
    return this.appService.getQuotient(request);
  }

}
