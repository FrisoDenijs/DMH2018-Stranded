import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelTimeRequest, TravelTimeResponse } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TravelTimeService {

  private readonly travelTimeUrl = 'http://172.24.23.244:8000/api/travelTime';

  constructor(private http: HttpClient) { }

  get(req: TravelTimeRequest): Observable<TravelTimeResponse> {
    return this.http.get<TravelTimeResponse>(`${this.travelTimeUrl}?to=${req.to}&from=${req.from}`);
  }
}
