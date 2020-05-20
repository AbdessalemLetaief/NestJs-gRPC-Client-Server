import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath: join(__dirname, '../src/hero/app.proto'),
  },
};
