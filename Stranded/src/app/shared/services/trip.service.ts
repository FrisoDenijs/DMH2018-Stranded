import { Injectable } from '@angular/core';
import { PostTripRequest, PostTripResponse, GetTripRequest, TripModel } from '../models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private readonly tripUrl = 'http://172.24.23.244:8000/api/trip';
  private readonly tripsUrl = 'http://172.24.23.244:8000/api/trips';

  constructor(private http: HttpClient) { }

  post(req: PostTripRequest): Observable<PostTripResponse> {
    return this.http.post<PostTripResponse>(this.tripUrl, req);
  }

  get(req: GetTripRequest): Observable<TripModel[]> {
    return this.http.get<TripModel[]>(`${this.tripsUrl}?to=${req.to}&from=${req.from}`);
  }
}
