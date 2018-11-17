import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationListService {

  private readonly stationListUrl = 'http://172.24.23.244:8000/api/stationList';

  constructor(private http: HttpClient) { }

  get(): Observable<string[]> {
    return this.http.get<string[]>(this.stationListUrl);
  }
}
