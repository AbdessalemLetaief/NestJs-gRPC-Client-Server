import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { microserviceOptions } from './grpc-client-options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(microserviceOptions);
  await app.startAllMicroservicesAsync();
  app.listen(2626);
}
bootstrap();
