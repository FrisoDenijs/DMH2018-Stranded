import { Injectable } from '@angular/core';
import { PostTripRequest, PostTripResponse, GetTripRequest, GetTripResponse, TripModel } from '../models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private readonly tripUrl = 'http://172.24.23.244:8000/api/trips';

  constructor(private http: HttpClient) { }

  post(req: PostTripRequest): Observable<PostTripResponse> {
    const res = new PostTripResponse();
    res.tripId = 42;

    return of<PostTripResponse>(res);
  }

  get(req: GetTripRequest): Observable<GetTripResponse> {
    return this.http.get<GetTripResponse>(`${this.tripUrl}?to=${req.to}&from=${req.from}`);
  }
}
