import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StationInfoResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StationInfoService {

  private readonly stationInfoUrl = 'http://172.24.23.244:8000/api/stationInfo';

  constructor(private http: HttpClient) { }

  get(station: string): Observable<StationInfoResponse> {
    return this.http.get<StationInfoResponse>(`${this.stationInfoUrl}?station=${station}`);
  }
}
