import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetDisruptionResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DisruptionsService {

  constructor() { }

  get(): Observable<GetDisruptionResponse> {
    return of<undefined>();
  }
}
