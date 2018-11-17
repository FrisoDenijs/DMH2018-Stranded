import { Injectable } from '@angular/core';
import { PostTripRequest, PostTripResponse, GetTripRequest, GetTripResponse, TripModel } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() { }

  post(req: PostTripRequest): Observable<PostTripResponse> {
    const res = new PostTripResponse();
    res.tripId = 42;

    return of<PostTripResponse>(res);
  }
  get(req: GetTripRequest): Observable<GetTripResponse> {
    const res = new GetTripResponse();

    const trip1 = new TripModel();
    const trip2 = new TripModel();

    trip1.availableSeats = 2;
    trip1.id = 42;
    trip1.age = 19;
    trip1.gender = 'vrouw';
    trip1.name = 'Leia Organa';

    trip2.availableSeats = 3;
    trip2.id = 18;
    trip1.age = 32;
    trip1.gender = 'man';
    trip1.name = 'Obi Wan Kenobi';

    res.trips = new TripModel[2];
    res.trips[0] = trip1;
    res.trips[1] = trip2;

    return of<GetTripResponse>(res);
  }
}
