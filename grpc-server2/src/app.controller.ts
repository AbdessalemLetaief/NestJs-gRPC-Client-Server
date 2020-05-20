import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';

interface IHero {
  id: number;
}

interface Hero {
  id: number;
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'FindOne') //GrpcMethod binds between this method in controller and method (Service) in proto file
  findOne(data: IHero): Hero {
    const items: Hero[] = [
      { id: 1, name: 'Super-Spaghetti' },
      { id: 2, name: 'Stick-Man' },
    ];
    // console.log(JSON.stringify(data)) // to see data you need to stringify it
    return items.find(({ id }) => id === data.id);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
