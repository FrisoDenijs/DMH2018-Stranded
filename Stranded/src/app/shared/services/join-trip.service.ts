import { Injectable } from '@angular/core';
import { PostJoinTripRequest, PostJoinTripResponse, GetJoinTripRequest, GetJoinTripResponse } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinTripService {

  constructor() { }

  post(req: PostJoinTripRequest): Observable<PostJoinTripResponse> {
    return of<undefined>();
  }

  get(req: GetJoinTripRequest): Observable<GetJoinTripResponse> {
    return of<undefined>();
  }
}
