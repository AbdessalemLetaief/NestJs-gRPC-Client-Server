import { Observable } from 'rxjs';

export interface IGrpcService {
  findOne(data: { id: number }): Observable<any>;
}
