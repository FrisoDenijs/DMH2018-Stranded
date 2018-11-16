import { Injectable } from '@angular/core';
import { PostTripRequest, PostTripResponse, GetTripRequest, GetTripResponse } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() { }

  post(req: PostTripRequest): Observable<PostTripResponse> {
    return of<undefined>();
  }
  get(req: GetTripRequest): Observable<GetTripResponse> {
    return of<undefined>();
  }
}
