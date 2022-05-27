import { Observable, switchMap } from 'rxjs';
import { APIResponseInterface } from '../interfaces/api-response-interface';
import { ServiceBase } from './service-base';

export class ServiceBaseGet<S> extends ServiceBase {
  getAll(query?: string): Observable<APIResponseInterface<S>> {
    if (!query) {
      query = '';
    }

    return this.url$.pipe(
      switchMap((url) =>
        this.httpClient.get<APIResponseInterface<S>>(`${url}/?${query}`)
      )
    );
  }

  getById(id: number): Observable<S> {
    return this.url$.pipe(
      switchMap((url) => this.httpClient.get<S>(`${url}/${id}`))
    );
  }
}
