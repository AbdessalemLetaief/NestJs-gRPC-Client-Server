import {
  Controller,
  OnModuleInit,
  Get,
  Param,
} from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';
import { IGrpcService } from './grpc.interface';
import { Observable } from 'rxjs';

@Controller()
export class AppController implements OnModuleInit {
  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Get(':id')
  call(@Param() params): Observable<any> {
    return this.grpcService.findOne({ id: +params.id });
  }
}
