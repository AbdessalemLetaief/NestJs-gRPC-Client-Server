import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'FindOne') //GrpcMethod binds between this method in controller and method (Service) in proto file
  findOne(data: IHero): Hero {
    const items: Hero[] = [
      { id: 1, name: 'Super-Spaghetti' },
      { id: 2, name: 'Stick-Man' },
    ];
   return items.find(({ id }) => id === data.id);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
