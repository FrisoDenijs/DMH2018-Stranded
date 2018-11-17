import { Injectable } from '@angular/core';
import { PostJoinTripRequest, PostJoinTripResponse, GetJoinTripRequest, GetJoinTripResponse, JoinTripModel } from '../models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoinTripService {

  private readonly joinTripUrl = 'http://172.24.23.244:8000/api/joinTrip';

  constructor(private http: HttpClient) { }

  post(req: PostJoinTripRequest): Observable<PostJoinTripResponse> {
    return this.http.post<PostJoinTripResponse>(this.joinTripUrl, req);
  }

  get(req: GetJoinTripRequest): Observable<JoinTripModel[]> {
    return this.http.get<JoinTripModel[]>(`${this.joinTripUrl}?trip=${req.tripId}`);
  }
}
