import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetDisruptionResponse } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisruptionsService {

  private readonly disruptionUrl = 'http://172.24.23.244:8000/api/disruptions/';

  constructor(private http: HttpClient) { }

  get(): Observable<GetDisruptionResponse> {
    return this.http.get<GetDisruptionResponse>(this.disruptionUrl);
  }
}
