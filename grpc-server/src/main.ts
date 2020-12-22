import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { microserviceOptions } from './grpc-client-options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(microserviceOptions);
  await app.startAllMicroservicesAsync().then(()=>{
    Logger.log('Grpc server running')
  })
  app.listen(process.env.PORT);
  Logger.log(`Server listening on port ${process.env.PORT}`)
  console.log(process.env.PORT)
}
bootstrap();
