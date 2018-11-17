import { Injectable } from '@angular/core';
import { PostJoinTripRequest, PostJoinTripResponse, GetJoinTripRequest, GetJoinTripResponse, JoinTripModel } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinTripService {

  constructor() { }

  post(req: PostJoinTripRequest): Observable<PostJoinTripResponse> {
    const res = new PostJoinTripResponse();

    res.joinTripId = 1977;

    return of<PostJoinTripResponse>(res);
  }

  get(req: GetJoinTripRequest): Observable<GetJoinTripResponse> {
    const res = new GetJoinTripResponse();
    const join1 = new JoinTripModel();
    const join2 = new JoinTripModel();

    res.joins = new JoinTripModel[2];

    join1.age = 84;
    join1.gender = 'vrouw';
    join1.id = 1977;
    join1.name = 'Annie';

    join2.age = 12;
    join2.gender = 'man';
    join2.id = 1981;
    join2.name = 'Puk';

    res.joins[0] = join1;
    res.joins[1] = join2;

    return of<GetJoinTripResponse>();
  }
}
