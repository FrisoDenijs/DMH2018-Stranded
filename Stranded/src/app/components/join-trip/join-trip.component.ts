import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { JoinTripModel, TripModel, JoinTripService, GetJoinTripRequest, PostJoinTripRequest } from '../../shared';

@Component({
  selector: 'app-join-trip',
  templateUrl: './join-trip.component.html',
  styleUrls: ['./join-trip.component.scss']
})
export class JoinTripComponent implements OnInit {

  constructor(private joinTripService: JoinTripService) { }

  public header: string;
  public offeredBy: string;
  public fellowTravelers: JoinTripModel[];

  @Input()
  public trip: TripModel;

  @Output()
  public joinTrip = new EventEmitter<TripModel>();

  ngOnInit() {
    const req = new GetJoinTripRequest();

    req.tripId = this.trip.id;

    this.joinTripService.get(req).subscribe( res => {
      this.fellowTravelers = res;
    });
  }

  onJoinTrip() {
    this.joinTrip.emit(this.trip);
  }
}
