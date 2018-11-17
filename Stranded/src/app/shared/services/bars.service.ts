import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBarsResponse } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarsService {

  private readonly barsUrl = 'http://172.24.23.244:8000/api/bars';

  constructor(private http: HttpClient) { }

  get(station: string): Observable<GetBarsResponse> {
    return this.http.get<GetBarsResponse>(`${this.barsUrl}?station=${station}`);
  }
}
